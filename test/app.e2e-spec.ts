import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect([
        {
          image: 'ttps://img.povar.ru/list/6d/77/d7/43/ostrie_marinovannie_ogurchiki-308112.JPG',
          price: 300,
          name: 'Огурцы',
          id: '61d3614fe436fd7b6ed8a054'
        }
      ]);
  });
});
