FROM denoland/deno:1.13.2


WORKDIR /app

# Prefer not to run as root.
USER deno


# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache mod.ts

# The port that your application listens to.
ARG PORT=8080

EXPOSE ${PORT}

CMD ["run", "--allow-net", "--allow-env", "--allow-write", "--allow-read", "mod.ts"]