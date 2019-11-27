// 错误处理

function resolveP(n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n), n);
  });
}

function rejectP(n) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(n)), n);
  });
}

async function handleError() {
  try {
    const data = await rejectP(100)
    console.log('success', data)
  } catch (err) {
    
  }
}

handleError()