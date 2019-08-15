export const GetData = type => {
  let baseUrl = "http://klasifikasi-ptpnx-djoembang.herokuapp.com/api/"

  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: "GET"
    }).then(res =>
      res
        .json({
          msg: "success"
        })
        .then(resJson => resolve(resJson))
        .catch(err => reject(err))
    )
  })
}
