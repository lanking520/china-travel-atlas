/**
 * Prints slim catalog JSON to stdout (consumed by gen-explore-catalog.mjs).
 */
import { buildCatalogRoutes } from "../../lib/explore-catalog-source";

const routes = buildCatalogRoutes();
process.stdout.write(JSON.stringify(routes));
