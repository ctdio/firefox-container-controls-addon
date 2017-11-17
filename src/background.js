/* globals browser */

;(function () {
  const { tabs, commands } = browser

  commands.onCommand.addListener(async (command) => {
    try {
      const [ tab ] = await tabs.query({
        active: true,
        currentWindow: true
      })

      const { cookieStoreId } = tab

      switch (command) {
        case 'containerify-open-tab':
          await tabs.create({ cookieStoreId })
          break
        // ignore all other commands
      }
    } catch (err) {
      console.error(`Error handing command: ${command}`, err)
    }
  })
})()
