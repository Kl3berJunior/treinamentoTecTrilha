import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

// Por esse metodo de filtro, podemos trazer juntos as informações que faltam na criação do usuario

@Catch()
export class FiltroDeExcecaoHttp implements ExceptionFilter {

    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: Error, host: ArgumentsHost): void {

        const { httpAdapter } = this.httpAdapterHost;

        const contexto = host.switchToHttp();
        const requisicao = contexto.getRequest();
        const resposta = contexto.getResponse();

        const { status, body } = exception instanceof HttpException
            ? {
                status: exception.getStatus(),
                body: exception.getResponse(),
            } : {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    message: exception.message,
                    path: requisicao.path
                }
            }
        httpAdapter.reply(resposta, body, status)
    }
}