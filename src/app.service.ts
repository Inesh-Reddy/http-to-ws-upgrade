import { Injectable } from '@nestjs/common';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getData(): Promise<string[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: Todo[] = await response.json();
    return data.map((todo) => todo.title);
  }
}
