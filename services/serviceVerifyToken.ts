const serviceVerifyToken = async (paramsToSend: any) => {
  const { secret, token } = paramsToSend
  const URL_HOME = `/api/totp/verify-code?secret=${secret}&token=${token}`
  const response = await fetch(URL_HOME)
  const data = await response.json()
  return data
}

export default serviceVerifyToken
