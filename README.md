# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function doesn't always run as expected.  This can lead to memory leaks and unexpected behavior.

## Problem
The provided `MyComponent` uses `useEffect` to log messages on every render and during cleanup.  Under certain circumstances, particularly when the component unmounts quickly, or during rapid state changes, the cleanup function may not execute, leaving behind unintended resources.