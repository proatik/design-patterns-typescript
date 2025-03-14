export abstract class DataProcessor {
  public process(data: string): void {
    this.loadData(data);
    if (this.isValidData(data)) {
      this.processData(data);
      this.saveData(data);
    } else {
      console.log("Data is invalid, processing aborted.");
    }
  }

  protected abstract loadData(data: string): void;
  protected abstract isValidData(data: string): boolean;
  protected abstract processData(data: string): void;
  protected abstract saveData(data: string): void;
}
