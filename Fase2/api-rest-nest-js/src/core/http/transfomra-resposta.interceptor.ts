import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { NestResponse } from "./nest-response";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
 
@Injectable()
export class TransformaRespostaInterceptor implements NestInterceptor{

    private httpAdpter: AbstractHttpAdapter;
    constructor(adapterHost: HttpAdapterHost) { 
        this.httpAdpter = adapterHost.httpAdapter
    }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
            .pipe(
                map( (respostaDoControlador: NestResponse) => {
                    if( respostaDoControlador instanceof NestResponse){
                        const contexto = context.switchToHttp();
                        const response = contexto.getResponse();
                        const {headers, status, body} = respostaDoControlador;

                        const nomesDosCabecalhos = Object.getOwnPropertyNames(headers);
                        nomesDosCabecalhos.forEach(nomeDoCabecalho => {
                            const valorDoCabecalho = headers[nomeDoCabecalho];
                            this.httpAdpter.setHeader(response, nomeDoCabecalho, valorDoCabecalho)
                        })

                        this.httpAdpter.status(response, status);

                        return body;
                    }

                    return respostaDoControlador;
                } )
            );
    }
    
}