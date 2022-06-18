import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Envelope } from '../resources/envelope.resource';

@Injectable()
/**
 * Wraps the response object in an envelope for {@type T}
 */
export class EnvelopeInterceptor<T> implements NestInterceptor<T, Envelope<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Envelope<T>> {
    return next.handle().pipe(map((data) => Envelope.from(data)));
  }
}
