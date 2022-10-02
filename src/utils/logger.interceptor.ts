import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //console.log('Before...', Object.keys(context.getArgs()[0])) //obtener la request

    const [req, res] =context.getArgs()

    return next.handle();
  }
}
