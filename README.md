# home-budget-api

Home Budget App Backend API in Deno Runtime

Run command: `deno run --allow-net --allow-write --allow-read mod.ts`

# Docker

Build and run command:
`docker build --build-arg PORT=8080 -t budget-api . && docker run --rm -e PORT=8080 -it --name budget-api -p 8080:8080 budget-api`

Stopping container:

`docker stop budget-api`
