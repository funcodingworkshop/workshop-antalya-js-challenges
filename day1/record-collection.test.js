const updateRecords = require("./record-collection");

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

test(`updateRecords(recordCollection, 5439, 'artist', 'ABBA')`, () => {
  expect(updateRecords(recordCollection, 5439, "artist", "ABBA")).toStrictEqual(
    {
      2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
      },
      2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
      },
      1245: {
        artist: "Robert Palmer",
        tracks: [],
      },
      5439: {
        albumTitle: "ABBA Gold",
        artist: "ABBA",
      },
    }
  );
});

test(`updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, () => {
  expect(
    updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
  ).toStrictEqual({
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
      tracks: ["Take a Chance on Me"],
    },
  });
});

test(`updateRecords(recordCollection, 2548, "artist", "")`, () => {
  expect(updateRecords(recordCollection, 2548, "artist", "")).toStrictEqual({
    2548: {
      albumTitle: "Slippery When Wet",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  });
});

test(`updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, () => {
  expect(
    updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
  ).toStrictEqual({
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: ["Addicted to Love"],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  });
});

test(`updateRecords(recordCollection, 2468, "tracks", "Free")`, () => {
  expect(updateRecords(recordCollection, 2468, "tracks", "Free")).toStrictEqual(
    {
      2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
      },
      2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette", "Free"],
      },
      1245: {
        artist: "Robert Palmer",
        tracks: [],
      },
      5439: {
        albumTitle: "ABBA Gold",
      },
    }
  );
});

test(`updateRecords(recordCollection, 2548, "tracks", "")`, () => {
  expect(updateRecords(recordCollection, 2548, "tracks", "")).toStrictEqual({
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  });
});

test(`updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, () => {
  expect(
    updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
  ).toStrictEqual({
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      albumTitle: "Riptide",
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  });
});
