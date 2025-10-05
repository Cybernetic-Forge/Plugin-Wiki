---
layout: default
title: Test Tables and Tabs
description: Testing table and tab functionality
---

# Testing Tables and Tabs

## Table Test

Here's a simple table:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |

Here's a table with more columns:

| Command | Description | Permission | Default |
|---------|-------------|------------|---------|
| `/test` | Test command | test.use | true |
| `/admin` | Admin command | admin.use | false |

## Tab Test

Here's a tab example with Maven and Gradle:

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button">Maven</button>
    <button class="tab-button">Gradle</button>
  </div>
  <div class="tab-content">

### Maven Configuration

Add this to your `pom.xml`:

```xml
<dependency>
  <groupId>com.example</groupId>
  <artifactId>plugin</artifactId>
  <version>1.0.0</version>
</dependency>
```

  </div>
  <div class="tab-content">

### Gradle Configuration

Add this to your `build.gradle`:

```gradle
dependencies {
  implementation 'com.example:plugin:1.0.0'
}
```

  </div>
</div>

## Multiple Tab Example

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button">Java</button>
    <button class="tab-button">Kotlin</button>
    <button class="tab-button">Scala</button>
  </div>
  <div class="tab-content">

### Java Example

```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

  </div>
  <div class="tab-content">

### Kotlin Example

```kotlin
fun main() {
    println("Hello World!")
}
```

  </div>
  <div class="tab-content">

### Scala Example

```scala
object Example extends App {
  println("Hello World!")
}
```

  </div>
</div>

## Combined Test

You can also mix tables and tabs:

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button">Commands</button>
    <button class="tab-button">Permissions</button>
  </div>
  <div class="tab-content">

| Command | Description |
|---------|-------------|
| `/shop create` | Create a new shop |
| `/shop delete` | Delete a shop |

  </div>
  <div class="tab-content">

| Permission | Description | Default |
|------------|-------------|---------|
| shop.create | Allow creating shops | op |
| shop.delete | Allow deleting shops | op |

  </div>
</div>
