import { AlertTriangle } from 'lucide-react';

import { ExampleComponent } from '@/components/example-component';

/**
 * TODO: Implement your solution here
 *
 * Do not include whole solution in this file, decompose it into smaller components,
 * which you can put in `src/components`.
 */
const HomePage = () => (
	<div>
		<div>header</div>

		<div>left side bar</div>
		<div>main content</div>
		<div>right side bar</div>

		<div className="mt-4 flex items-center text-xl">
			<AlertTriangle size="48" className="mr-4" />
			<ExampleComponent />
		</div>
	</div>
);

export default HomePage;
