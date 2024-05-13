import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const DashboardPage = async () => {
	const session: any = await getServerSession(authOptions);

	return (
		<>
			{session?.user && (
				// user profile
				<div>
					<Image
						src={session?.user?.image}
						alt={session?.user?.name}
						width={100}
						height={100}
						className='rounded-full mx-auto my-5'
					/>
					<h1 className='text-4xl text-center font-semibold my-5'>Dashboard to {session.user.name}</h1>
					<p className='text-center'>Logged in email: {session?.user?.email}</p>
				</div>
			)}
		</>
	);
};

export default DashboardPage;
