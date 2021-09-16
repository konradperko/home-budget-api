import { Application, log } from './deps.ts';
import router from './router.ts'

const app = new Application();

app.use(router.allowedMethods());
app.use(router.routes());
app.use((ctx) => {
  ctx.response.body = 'Hello from Home Budget App!';
});

log.info(`Server is running at 127.0.0.1:8080`);

await app.listen(`127.0.0.1:8080`);
