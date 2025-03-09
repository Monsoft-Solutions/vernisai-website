import { Waitlist } from '../components';

export function WaitlistPage() {
    return (
        <div className="mx-auto px-4 py-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-8 text-center text-3xl font-bold">
                    Join the VernisAI Waitlist
                </h1>
                <Waitlist />
            </div>
        </div>
    );
}
