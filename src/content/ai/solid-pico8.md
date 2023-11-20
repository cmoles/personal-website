---
title: 'SOLID Pico-8'
pubDate: '2023-11-19'
description: 'ChatGPT Generates Examples of SOLID Principles in Pico-8.'
author: 'ChatGPT'
tags: ["pico-8", "lua", "solid", "chatgpt"]
---

Here are examples for each of the SOLID principles using Pico-8's Lua:


### 1. Single Responsibility Principle (SRP):

```lua
-- SRP: Each class should have only one reason to change

-- Bad Example
function PlayerUpdate(player)
  -- Code handling player movement, rendering, and collision all in one function
end

-- Good Example
function PlayerUpdate(player)
  MovePlayer(player)
end

function MovePlayer(player)
  -- Code handling player movement
end

function RenderPlayer(player)
  -- Code handling player rendering
end

function CheckCollision(player, obstacles)
  -- Code handling collision detection
end
```

### 2. Open/Closed Principle (OCP):

```lua
-- OCP: Software entities should be open for extension but closed for modification

-- Bad Example
function CalculateArea(shape)
  if shape.type == "circle" then
    return math.pi * shape.radius^2
  elseif shape.type == "rectangle" then
    return shape.width * shape.height
  end
end

-- Good Example
function CalculateArea(shape)
  return shape:calculateArea()
end

-- Circle class
Circle = {}
function Circle:new(radius)
  local obj = { type = "circle", radius = radius }
  setmetatable(obj, self)
  self.__index = self
  return obj
end

function Circle:calculateArea()
  return math.pi * self.radius^2
end

-- Rectangle class
Rectangle = {}
function Rectangle:new(width, height)
  local obj = { type = "rectangle", width = width, height = height }
  setmetatable(obj, self)
  self.__index = self
  return obj
end

function Rectangle:calculateArea()
  return self.width * self.height
end
```

### 3. Liskov Substitution Principle (LSP):

```lua
-- LSP: Subtypes must be substitutable for their base types

-- Bad Example
function PlaySound(audio)
  if type(audio) == "string" then
    -- Play sound from file
  else
    -- Play generated sound
  end
end

-- Good Example
function PlaySound(audio)
  audio:play()
end

-- SoundFile class
SoundFile = {}
function SoundFile:new(file)
  local obj = { file = file }
  setmetatable(obj, self)
  self.__index = self
  return obj
end

function SoundFile:play()
  -- Code to play sound from file
end

-- GeneratedSound class
GeneratedSound = {}
function GeneratedSound:new(data)
  local obj = { data = data }
  setmetatable(obj, self)
  self.__index = self
  return obj
end

function GeneratedSound:play()
  -- Code to play generated sound
end
```

### 4. Interface Segregation Principle (ISP):

```lua
-- ISP: No client should be forced to depend on methods it does not use

-- Bad Example
Bird = {}
function Bird:fly()
  -- Code for flying
end

function Bird:swim()
  -- Code for swimming (not all birds can swim)

-- Good Example
Bird = {}
function Bird:fly()
  -- Code for flying
end

-- SwimmingBird class
SwimmingBird = {}
function SwimmingBird:swim()
  -- Code for swimming
end
```

### 5. Dependency Inversion Principle (DIP):

```lua
-- DIP: High-level modules should not depend on low-level modules, both should depend on abstractions

-- Bad Example
function PlayerUpdate(player, input)
  if input:isButtonPressed("left") then
    player:moveLeft()
  end
  -- More code handling input
end

-- Good Example
function PlayerUpdate(player, input)
  if input:isMovingLeft() then
    player:moveLeft()
  end
  -- More code handling input
end

-- Input interface
Input = {}
function Input:isMovingLeft() end

-- KeyboardInput class
KeyboardInput = {}
setmetatable(KeyboardInput, { __index = Input })
function KeyboardInput:isMovingLeft()
  -- Code to check if the left key is pressed
end

-- ControllerInput class
ControllerInput = {}
setmetatable(ControllerInput, { __index = Input })
function ControllerInput:isMovingLeft()
  -- Code to check if the left stick is moved left
end
```

Note: PICO-8's version of Lua is quite minimalistic, and SOLID principles might not be as explicitly enforced as in other programming languages. The examples here are simplified and adapted for the constraints of PICO-8's environment.
