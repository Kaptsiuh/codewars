class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._filename = fullName.split(".").slice(0, -1).join(".");
    this._extension = fullName.split(".").pop();
    this._contents = contents;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._filename;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    this._contents += (this._contents ? "\n" : "") + str;
  }

  gets() {
    if (!this._contents) return undefined;
    const lines = this._contents.split("\n");
    if (this._lineIdx >= lines.length) return undefined;
    return lines[this._lineIdx++];
  }

  getc() {
    if (!this._contents) return undefined;
    if (this._charIdx >= this._contents.length) return undefined;
    return this._contents[this._charIdx++];
  }
}

File.prototype._lineIdx = 0;
File.prototype._charIdx = 0;

module.exports = File;
