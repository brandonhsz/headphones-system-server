import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(LoggerMiddleware);
  await app.listen(process.env.PORT_SERVER || 3001);
}
bootstrap();
