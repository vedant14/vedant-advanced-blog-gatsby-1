import React, { useState } from "react"

export const ModeContext = React.createContext([])

const ModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<ModeContext.Provider value={[darkMode, setDarkMode]}>
			{children}
		</ModeContext.Provider>
	)
}

export default ModeProvider
