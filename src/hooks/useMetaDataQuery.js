import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
	const data = useStaticQuery(graphql`
		query MetaDataQuery {
			site {
				siteMetadata {
					author
					title
					description
				}
			}
		}
	`)
	return data.site.siteMetadata
}