import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavoriteGameDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que favoritou o jogo, no formato UUID',
    example: '1e41393b-849b-4286-b435-e746f3bc5daa',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do jogo a ser favoritado',
    example: 'God of War',
  })
  gameName: string;
}