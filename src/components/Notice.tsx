// api token
async function getNotice() {
	const res = await fetch("http://127.0.0.1:1337/api/notices?populate=*", {
		headers: {
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	});

	if (!res.ok) {
		throw new Error("Failed to fetch notices");
	}

	const data = res.json();
	return data;
}

export default async function Notice() {
	const notice = await getNotice();
	return (
		<div>
			<h1>Notice</h1>
			<p>{JSON.stringify(notice)}</p>
		</div>
	);
}
