// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// This solution works on freecodecamp website, but it mutates the initial data object
function updateRecordsSolution(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (records[id].tracks === undefined) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

// This is my solution and it passes all tests in record-collection.test.js file
// and it does not mutate the initial collection
// we always use this approach for production code
function updateRecords(records, id, prop, value) {
  const record = { ...records[id] };
  if (value === "") {
    delete record[prop];
  } else if (prop !== "tracks") {
    record[prop] = value;
  } else {
    if (record.tracks === undefined) {
      record.tracks = [];
    }
    record.tracks = [...record.tracks];
    record.tracks.push(value);
  }
  return {
    ...records,
    [id]: record,
  };
}

module.exports = updateRecords;
