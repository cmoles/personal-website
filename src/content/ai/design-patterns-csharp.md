---
title: 'Design Patterns with C#'
pubDate: '2023-11-1'
description: 'ChatGPT Generates Examples of Design Patterns in C#.'
author: 'ChatGPT'
tags: ["csharp", "design-patterns", "chatgpt"]
---

Here are examples of 10 design patterns implemented in C#:

1. **Singleton Pattern**:

   The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.

   ```csharp
   public sealed class Singleton
   {
       private static Singleton instance;
       private Singleton() { }

       public static Singleton Instance
       {
           get
           {
               if (instance == null)
               {
                   instance = new Singleton();
               }
               return instance;
           }
       }
   }
   ```

2. **Observer Pattern**:

   The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated.

   ```csharp
   public interface IObserver
   {
       void Update(string message);
   }

   public class ConcreteObserver : IObserver
   {
       public void Update(string message)
       {
           // Handle the update
       }
   }

   public class Subject
   {
       private List<IObserver> observers = new List<IObserver>();

       public void Attach(IObserver observer)
       {
           observers.Add(observer);
       }

       public void Notify(string message)
       {
           foreach (var observer in observers)
           {
               observer.Update(message);
           }
       }
   }
   ```

3. **Factory Pattern**:

   The Factory pattern provides an interface for creating objects but lets subclasses alter the type of objects that will be created.

   ```csharp
   public interface IProduct
   {
       void Create();
   }

   public class ConcreteProductA : IProduct
   {
       public void Create()
       {
           // Create product A
       }
   }

   public class ConcreteProductB : IProduct
   {
       public void Create()
       {
           // Create product B
       }
   }

   public class Factory
   {
       public IProduct CreateProduct(string productType)
       {
           switch (productType)
           {
               case "A":
                   return new ConcreteProductA();
               case "B":
                   return new ConcreteProductB();
               default:
                   throw new ArgumentException("Invalid product type");
           }
       }
   }
   ```

4. **Decorator Pattern**:

   The Decorator pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

   ```csharp
   public abstract class Component
   {
       public abstract void Operation();
   }

   public class ConcreteComponent : Component
   {
       public override void Operation()
       {
           // Perform the operation
       }
   }

   public abstract class Decorator : Component
   {
       protected Component component;

       public Decorator(Component component)
       {
           this.component = component;
       }

       public override void Operation()
       {
           if (component != null)
           {
               component.Operation();
           }
       }
   }

   public class ConcreteDecoratorA : Decorator
   {
       public ConcreteDecoratorA(Component component) : base(component) { }

       public override void Operation()
       {
           base.Operation();
           // Additional operation for A
       }
   }
   ```

5. **Proxy Pattern**:

   The Proxy pattern provides a surrogate or placeholder for another object to control access to it.

   ```csharp
   public interface ISubject
   {
       void Request();
   }

   public class RealSubject : ISubject
   {
       public void Request()
       {
           // Real object performs the request
       }
   }

   public class Proxy : ISubject
   {
       private RealSubject realSubject;

       public void Request()
       {
           if (realSubject == null)
           {
               realSubject = new RealSubject();
           }
           realSubject.Request();
       }
   }
   ```

6. **Strategy Pattern**:

   The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.

   ```csharp
   public interface IStrategy
   {
       void Execute();
   }

   public class ConcreteStrategyA : IStrategy
   {
       public void Execute()
       {
           // Execute strategy A
       }
   }

   public class Context
   {
       private IStrategy strategy;

       public Context(IStrategy strategy)
       {
           this.strategy = strategy;
       }

       public void ExecuteStrategy()
       {
           strategy.Execute();
       }
   }
   ```

7. **Command Pattern**:

   The Command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.

   ```csharp
   public interface ICommand
   {
       void Execute();
   }

   public class ConcreteCommand : ICommand
   {
       private Receiver receiver;

       public ConcreteCommand(Receiver receiver)
       {
           this.receiver = receiver;
       }

       public void Execute()
       {
           receiver.Action();
       }
   }

   public class Receiver
   {
       public void Action()
       {
           // Perform the action
       }
   }

   public class Invoker
   {
       private ICommand command;

       public void SetCommand(ICommand command)
       {
           this.command = command;
       }

       public void ExecuteCommand()
       {
           command.Execute();
       }
   }
   ```

8. **Visitor Pattern**:

   The Visitor pattern represents an operation to be performed on elements of an object structure. It lets you define a new operation without changing the classes of the elements on which it operates.

   ```csharp
   public interface IVisitor
   {
       void Visit(ElementA elementA);
       void Visit(ElementB elementB);
   }

   public abstract class Element
   {
       public abstract void Accept(IVisitor visitor);
   }

   public class ElementA : Element
   {
       public override void Accept(IVisitor visitor)
       {
           visitor.Visit(this);
       }
   }

   public class ElementB : Element
   {
       public override void Accept(IVisitor visitor)
       {
           visitor.Visit(this);
       }
   }

   public class ConcreteVisitor : IVisitor
   {
       public void Visit(ElementA elementA)
       {
           // Perform the visit operation for ElementA
       }

       public void Visit(ElementB elementB)
       {
           // Perform the visit operation for ElementB
       }
   }
   ```

9. **Memento Pattern**:

   The Memento pattern provides the ability to restore an object to its previous state.

   ```csharp
   public class Originator
   {
       private string state;

       public string State
       {
           get => state;
           set => state = value;
       }

       public Memento CreateMemento()
       {
           return new Memento(state);
       }

       public void RestoreMemento(Memento memento)
       {
           state = memento.State;
       }
   }

   public class Memento
   {
       public string State { get; }

       public Memento(string state)
       {
           State = state;
       }
   }
   ```

10. **Composite Pattern**:

    The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies.

    ```csharp
    public abstract class Component
    {
        public abstract void Operation();
    }

    public class Leaf : Component
    {
        public override void Operation()
        {
            // Perform operation for a leaf component
        }
    }

    public class Composite : Component
    {
        private readonly List<Component> children = new List<Component>();

        public void Add(Component component)
        {
            children.Add(component);
        }

        public override void Operation()
        {
            foreach (var child in children)
            {
                child.Operation();
            }
        }
    }
    ```

These examples illustrate how various design patterns can be implemented in C# to address different architectural and behavioral requirements in your software applications.
