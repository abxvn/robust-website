---
id: guide-cli
title: Robust CLI
sidebar_label: CLI
---

import ShellOutput from '../src/common/ShellOutput'

## 1. List of common commands

<br />

```
robust --help
```
<ShellOutput lines={`
Usage: robust <command>
Commands:
  robust new <template> <name>  Scaffold new robust application
  robust serve                  Start application
  robust add <name>             Create module
  robust add:controller <name>  ᴇ Add new controller
Options:
  -h, --help     Show help                        [boolean]
  -v, --version  Show version number              [boolean]
`} />

Command list can be different when Robust CLI extensions found. For more information, please head down to [Extend CLI commands](#4-extend-cli-commands).

## 2. Official commands

### 2.1. `robust new`

The first thing we'll want to do is create a new Robust application by running the `robust new` command.

```
robust new api my-api
```
<ShellOutput lines={`
info Scaffolding {light api} app {name my-api}
    added: .gitignore
    added: controllers/IndexController.js
    added: index.js
    added: package.json
    added: README.md
success App {name my-api} created
info Installing dependencies ...
success App {name my-api} ready. Please {light \`robust serve\`} it
`} />

Robust will set you up with what seems like a huge amount of stuff for such a tiny command! You've got the entire Robust directory structure now with all the code you need to run our simple API `my-api` application right out of the box.

There are many available templates you can use for your application, each templates are designed to work to a particular type of application:

- api
- console
- mvc (coming soon)

For example, if you want to create a CLI application, please run
```
robust new console <app-name>
```

### 2.2. `robust serve`

The `robust serve` command launches a web server. You'll use this any time you want to access your application through a web browser (eg: [localhost:3000](//localhost:3000))

```shell
robust serve
```
<ShellOutput lines={`
info Starting app {name my-api} on {light development} port {light 3000}
success App {name my-api} started
info For more debug information, please run app with DEBUG=app*
`} />

The last message indicates how to show useful debug information like loaded modules, created routes, used ports, ... which is simple like:

```
DEBUG=app* robust serve
```
<ShellOutput lines={`
info Starting app {name my-api} on {light development} port {light 3000}
  {debug app my-api} routed  GET /  +0ms
  {debug app my-api} loaded modules: ... +4ms
  {debug app my-api} started in 0s 5.3134ms +1ms
success App {name my-api} started
  app my-api started server on port 3000 +2ms
`} />

Default port is `3000`. You can run your application on a different port using the `-p` option. The default `development` environment can be changed using `-e`.

```
robust serve -e production -p 5000
```

### 2.3. `robust add`

You can add new empty module to your application using `robust add` command, with the module name as paramter

```
robust add module-01
```
<ShellOutput lines={`
info Scaffolding empty module module-01 to my-api
   inject: package.json
    added: modules/module-01/.gitignore
    added: modules/module-01/index.js
    added: modules/module-01/package.json
`} />

You can also select other modules' template like `api`, `console`, `mvc (coming soon)`

```
robust add api-module --as api
```

## 3. Other CLI commands

> Side-note: These commands are added as extensions from many other Robust modules
> For more information on making CLI extensions, please see [Extend CLI commands](#4-extend-cli-commands)

### 3.1. `robust add:controller`

( Added by `@robust/parse-controllers` )

This command will create new controller for your application, for example adding `TestController`:

```
robust add:controller test
```
<ShellOutput lines={`
    added: controllers/TestController.js
`} />

Then, after `robust serve` your application, you can access [localhost:3000/test](//localhost:3000/test)

## 4. Extend CLI commands

Coming soon