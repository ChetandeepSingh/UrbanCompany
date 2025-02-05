import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarpenterModule } from './carpenter/carpenter.module';
import { SlotModule } from './slot/slot.module';
import { BookingModule } from './booking/booking.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abc123',
      database: 'urban_booking',
      autoLoadEntities: true, 
      synchronize: true,
    }),
    CarpenterModule,
    SlotModule,
    BookingModule,
  ],
})
export class AppModule {}