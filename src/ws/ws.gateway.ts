import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { map } from 'rxjs';

import { AppService } from 'src/app.service';

@WebSocketGateway()
export class WsGateway {
  constructor(private readonly appService: AppService) {}
  @SubscribeMessage('message')
  handleMessage(): string {
    return 'Hello world!';
  }

  @SubscribeMessage('todos')
  async onEvent(): Promise<WsResponse<string[]>> {
    const event = 'todos';
    const response = await this.appService.getData();
    return { event, data: response };
  }
}
