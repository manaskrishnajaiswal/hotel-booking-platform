class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: "i",
          },
        }
      : {};
    console.log(location);
    this.query = this.query.find({ ...location });
    return this;
  }
  filter() {
    const queryStrCopy = { ...this.queryStr };
    // remove fields from query
    const removeFields = ["location"];
    removeFields.forEach((el) => delete queryStrCopy[el]);
    this.query = this.query.find(queryStrCopy);
    return this;
  }
}

export default APIFeatures;
