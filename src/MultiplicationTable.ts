export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (this.isParamsValid(start, end)) {
      return this.generateMultiplicationTable(start, end)
    }
    return ''
  }

  private isStartNotGraterThanEnd(start: number, end: number): boolean {
    return start <= end
  }

  private isParamInRange(param: number): boolean {
    return param >= 1 && param <= 1000
  }

  private isParamsValid(start: number, end: number): boolean {
    return this.isParamInRange(start) && this.isParamInRange(end) && this.isStartNotGraterThanEnd(start, end) && Number.isInteger(start) && Number.isInteger(end)
  }

  private generateMultiplicationTable(start: number, end: number): string {
    const lineList = this.generateAllLineList(start, end)
    return this.mergeAllLineList(lineList)
  }

  private generateOneLine(start: number, end: number): string {
    let line = ''
    for (let i = start; i <= end; i++) {
      line += `${i}*${end}=${i*end}`
      if (i !== end) {
        line += ' '
      }
    }
    return line
  }

  private generateAllLineList(start: number, end: number): string[] {
    const lineList = []
    for (let i = start; i <= end; i++) {
      lineList.push(this.generateOneLine(start, i))
    }
    return lineList
  }

  private mergeAllLineList(lineList: string[]): string {
    return lineList.join('\n')
  }

}
