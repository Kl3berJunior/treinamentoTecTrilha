import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './common/filtros/filtro-de-excecao.filter';
import { FiltroErro } from './common/filtros/filtro';
import { TransformaRespostaInterceptor } from './core/http/transfomra-resposta.interceptor';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },{
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor
    }
  ],
})
export class AppModule {}
