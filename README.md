## Fatejs

A javascript implementation to pick up an option based on given odds and statistics

## Usage

```js
<script src="path/to/Fate.js"></script>
```

```js
<script>
const options = [
        {
          option: "Green",
          odds: 60,
        },
        {
          option: "White",
          odds: 20,
        },
        {
            option: "Red",
            odds: 20
        }
      ];

      //The sum of all odds MUST match 100, otherwise it will throw an error.
const fate = new Fate(options);
const picked = fate.pick(); //Picked up a random option with its chances based on its odds.
</script>
```
