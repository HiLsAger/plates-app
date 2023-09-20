import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Создание Swagger */
  const config = new DocumentBuilder()
    .setTitle('Plates web app')
    .setDescription('Newest app for create widgets')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  /* Создание Swagger */

  await app.listen(3000);
}
bootstrap();
