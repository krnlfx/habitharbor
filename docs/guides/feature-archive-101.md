# Archive guide

This guide explains how HabitHarbor handles archive in practice.

## Overview

The archive flow lives in its own module so the rest of the codebase stays untouched. It accepts a payload, applies the configured rules, and reports a result with timing information.

## Usage

Pass a payload to the archive handler. Empty input is rejected with a clear error, and transient failures are retried with backoff.

## Customizing

Each handler reads its options from a small options object. Tune timeouts and retries to match your workload.

## Testing

The handler reports processed and error counters, which makes it easy to assert behavior in automated tests.