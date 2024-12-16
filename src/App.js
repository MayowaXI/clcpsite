import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ProductsScreen from './screens/ProductsScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingScreen from './screens/LandingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import CancelScreen from './screens/CancelScreen';
import SuccessScreen from './screens/SuccessScreen';
import AdminConsoleScreen from './screens/AdminConsoleScreen';

function App() {
	const theme = extendTheme({
		styles: {
			global: (props) => ({
				body: {
					bg: props.colorMode === 'light' && '#F7FAFC',
				},
			}),
		},
	});

	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Header />
				<main>
					<Routes>
						<Route path='/products' element={<ProductsScreen />} />
						<Route path='/' element={<LandingScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
						<Route path='/cart' element={<CartScreen />} />
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/registration' element={<RegistrationScreen />} />
						<Route path='/email-verify/:token' element={<EmailVerificationScreen />} />
						<Route path='/password-reset/:token' element={<PasswordResetScreen />} />
						<Route path='/checkout' element={<CheckoutScreen />} />
						<Route path='/cancel' element={<CancelScreen />} />
						<Route path='/order-history' element={<YourOrdersScreen />} />
						<Route path='/success' element={<SuccessScreen />} />
						<Route path='/admin-console' element={<AdminConsoleScreen />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
