import { Application, log } from './deps.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello from Home Budget App!';
});

log.info('Server is running at 127.0.0.1:8000');

await app.listen('127.0.0.1:8000');
