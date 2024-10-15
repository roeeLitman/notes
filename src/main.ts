import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser  from 'cookie-parser'

async function bootstrap() {
  const PORT = process.env.PORT || 1414
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {console.log( `http://l:${PORT}`);
  });
}

bootstrap();
