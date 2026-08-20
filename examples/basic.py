"""Minimal example for HabitHarbor."""

from habitharbor import habitharbor


def main():
 runner = habitharbor({"name": "HabitHarbor", "dry_run": False})
 result = runner.execute()
 print(result)


if __name__ == "__main__":
 main()