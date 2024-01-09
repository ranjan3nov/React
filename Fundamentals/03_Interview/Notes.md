# Virtual DOM

### This is the old concept

### No more used

Link to the article for more information
https://github.com/acdlite/react-fiber-architecture

# Fibre

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm [described in the React docs](https://facebook.github.io/react/docs/reconciliation.html) will be largely the same. The key points are:

- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

## What is a fiber?

We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

Here we go!

---

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a **unit of work**.

# Reconcillation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

## New Update

A change in the data used to render a React app. Usually the result of setState. Eventually results in a re-render.
