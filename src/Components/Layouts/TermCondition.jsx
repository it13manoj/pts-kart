import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow p-8">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Terms & Conditions
                </h1>


                <p className="text-gray-600 mb-6">
                    Welcome to our website. By accessing or using our services, you agree
                    to be bound by the following terms and conditions. Please read them
                    carefully.
                </p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h2>
                    <p className="text-gray-600">
                        By accessing this website, you agree to comply with and be bound by
                        these Terms and Conditions and all applicable laws and regulations.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Use of Services</h2>
                    <p className="text-gray-600">
                        You agree to use our services only for lawful purposes and in a way
                        that does not infringe the rights of others or restrict their use of
                        the website.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Account Responsibility</h2>
                    <p className="text-gray-600">
                        You are responsible for maintaining the confidentiality of your
                        account credentials and for all activities that occur under your
                        account.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Intellectual Property</h2>
                    <p className="text-gray-600">
                        All content, trademarks, logos, and intellectual property displayed
                        on this website are owned by us and may not be used without prior
                        written permission.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Limitation of Liability</h2>
                    <p className="text-gray-600">
                        We shall not be liable for any direct, indirect, incidental, or
                        consequential damages arising from the use or inability to use our
                        services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Termination</h2>
                    <p className="text-gray-600">
                        We reserve the right to suspend or terminate your access to our
                        services at any time without prior notice if you violate these
                        terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Changes to Terms</h2>
                    <p className="text-gray-600">
                        We may update these Terms and Conditions from time to time. Continued
                        use of the website constitutes acceptance of the updated terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
                    <p className="text-gray-600">
                        If you have any questions about these Terms and Conditions, please
                        contact us at <span className="font-medium">support@example.com</span>.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
