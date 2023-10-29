export default class RequestError extends Error {
  info: any
  status = 0

  constructor(message: string) {
    super(message)
  }

  getInfo() {
    return this.info
  }

  setInfo(info: any) {
    this.info = info
  }

  getStatus() {
    return this.status
  }

  setStatus(status: number) {
    this.status = status
  }
}
