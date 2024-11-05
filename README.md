## How to run this app locally

#### Clone this repo into your machine

```bash
git clone https://github.com/hanifrev/weather-forecast.git
```

once it done, install it

#### Install dependencies

```bash
pnpm install
```

After install it, please copy <b>.env</b> file into the root of this repo,
.env file is attached on email

#### Run this app

```bash
pnpm run dev
```

Open <http://localhost:5173> in your browser to run it

#### Test

```bash
pnpm run test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

Please take a note that i still need to learn more about testing, so there's not much test case in here

#### Build

```bash
pnpm run build
```

#### API Error

If you experience issues while fetching data, it could be the API has reach its limit, since I only use free tier of QWeather account.

<!--
### Lint

```bash
pnpm run lint
````

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```
