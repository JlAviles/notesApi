import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedModule } from './seed/seed.module';
import { SeedService } from './seed/seed.service';

async function bootstrap() {
  const seed = await NestFactory.createApplicationContext(SeedModule);
  const seedService = await seed.get(SeedService);
  seedService.runSeed();
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
