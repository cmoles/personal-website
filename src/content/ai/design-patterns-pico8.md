---
title: 'Design Patterns with Pico-8'
pubDate: '2023-11-19'
description: 'ChatGPT Generates Examples of Design Patterns in Pico-8.'
author: 'ChatGPT'
tags: ["pico-8", "lua", "design-patterns", "chatgpt"]
---

Here are examples of 10 design patterns implemented in Pico-8's Lua:

### 1. Singleton Pattern:

```lua
-- Singleton Pattern
GameManager = {
  instance = nil
}

function GameManager.getInstance()
  if not GameManager.instance then
    GameManager.instance = {}
    setmetatable(GameManager.instance, { __index = GameManager })
  end
  return GameManager.instance
end

-- Usage
local gameManager = GameManager.getInstance()
```

### 2. Factory Method Pattern:

```lua
-- Factory Method Pattern
EnemyFactory = {}

function EnemyFactory:createEnemy(type)
  local enemy = {}
  if type == "basic" then
    enemy = BasicEnemy()
  elseif type == "boss" then
    enemy = BossEnemy()
  end
  return enemy
end

-- Usage
local enemyFactory = EnemyFactory:createEnemy("basic")
```

### 3. Observer Pattern:

```lua
-- Observer Pattern
Subject = {
  observers = {}
}

function Subject:addObserver(observer)
  add(self.observers, observer)
end

function Subject:notifyObservers()
  for observer in pairs(self.observers) do
    observer:update()
  end
end

-- Observer
PlayerObserver = {}

function PlayerObserver:update()
  print("Player has been updated!")
end

-- Usage
local subject = Subject
subject:addObserver(PlayerObserver)
subject:notifyObservers()
```

### 4. Command Pattern:

```lua
-- Command Pattern
Command = {}

function Command:execute()
  -- Abstract execute method
end

-- ConcreteCommand
JumpCommand = {}
setmetatable(JumpCommand, { __index = Command })

function JumpCommand:execute()
  print("Jump!")
end

-- Invoker
InputHandler = {}

function InputHandler:setCommand(command)
  self.command = command
end

function InputHandler:handleInput()
  self.command:execute()
end

-- Usage
local jumpCommand = JumpCommand
local inputHandler = InputHandler
inputHandler:setCommand(jumpCommand)
inputHandler:handleInput()
```

### 5. Strategy Pattern:

```lua
-- Strategy Pattern
Weapon = {}

function Weapon:attack()
  -- Abstract attack method
end

-- ConcreteStrategy
Sword = {}
setmetatable(Sword, { __index = Weapon })

function Sword:attack()
  print("Swinging sword!")
end

-- Context
Player = {}

function Player:setWeapon(weapon)
  self.weapon = weapon
end

function Player:performAttack()
  self.weapon:attack()
end

-- Usage
local sword = Sword
local player = Player
player:setWeapon(sword)
player:performAttack()
```

### 6. State Pattern:

```lua
-- State Pattern
PlayerState = {}

function PlayerState:handleInput()
  -- Abstract method
end

-- ConcreteState
StandingState = {}
setmetatable(StandingState, { __index = PlayerState })

function StandingState:handleInput()
  print("Player is standing.")
end

-- Context
Player = {
  state = nil
}

function Player:setState(state)
  self.state = state
end

function Player:handleInput()
  self.state:handleInput()
end

-- Usage
local standingState = StandingState
local player = Player
player:setState(standingState)
player:handleInput()
```

### 7. Decorator Pattern:

```lua
-- Decorator Pattern
Coffee = {}

function Coffee:cost()
  return 5
end

-- ConcreteComponent
Espresso = {}
setmetatable(Espresso, { __index = Coffee })

-- ConcreteDecorator
WithMilk = {}

function WithMilk:cost()
  return Espresso:cost() + 2
end

-- Usage
local coffee = WithMilk
print("Cost of coffee with milk:", coffee:cost())
```

### 8. Composite Pattern:

```lua
-- Composite Pattern
Graphic = {}

function Graphic:draw()
  -- Abstract draw method
end

-- Leaf
Circle = {}
setmetatable(Circle, { __index = Graphic })

function Circle:draw()
  print("Drawing circle")
end

-- Composite
CompositeGraphic = {
  graphics = {}
}

function CompositeGraphic:add(graphic)
  add(self.graphics, graphic)
end

function CompositeGraphic:draw()
  for graphic in pairs(self.graphics) do
    graphic:draw()
  end
end

-- Usage
local circle = Circle
local composite = CompositeGraphic
composite:add(circle)
composite:draw()
```

### 9. Proxy Pattern:

```lua
-- Proxy Pattern
Image = {}

function Image:display()
  -- Abstract display method
end

-- RealSubject
RealImage = {
  filename = ""
}

function RealImage:display()
  print("Displaying real image:", self.filename)
end

-- Proxy
ImageProxy = {
  realImage = nil
}

function ImageProxy:display()
  if not self.realImage then
    self.realImage = RealImage
    self.realImage.filename = "example.png"
  end
  self.realImage:display()
end

-- Usage
local imageProxy = ImageProxy
imageProxy:display()
```

### 10. Chain of Responsibility Pattern:

```lua
-- Chain of Responsibility Pattern
Handler = {}

function Handler:setSuccessor(successor)
  self.successor = successor
end

function Handler:handleRequest(request)
  -- Abstract handleRequest method
end

-- ConcreteHandler
ConcreteHandler = {
  threshold = 10
}
setmetatable(ConcreteHandler, { __index = Handler })

function ConcreteHandler:handleRequest(request)
  if request <= self.threshold then
    print("Request handled by ConcreteHandler")
  elseif self.successor then
    self.successor:handleRequest(request)
  else
    print("End of chain, request not handled")
  end
end

-- Usage
local handler1 = ConcreteHandler
local handler2 = ConcreteHandler
handler1:setSuccessor(handler2)
handler1:handleRequest(5)
```

Keep in mind that in a constrained environment like PICO-8, design patterns might be adapted to fit the limitations of the platform. These examples aim to demonstrate the concept of each design pattern within the given constraints.
