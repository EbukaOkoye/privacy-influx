import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="p-3">
      <h3 className="font-bold text-lg my-3 text-black">
        Privacy Policy for Influx
      </h3>
      <h3 className="font-bold text-lg my-3 text-black">
        Effective Date: August 2025
      </h3>
      <p className="mt-9 text-black text-base font-normal">
        Welcome to Influx, your trusted companion for discovering, reading, and
        enjoying books.
      </p>
      <p className="mt-5 text-black text-base font-normal">
        This Privacy Policy describes how Influx (“we”, “our”, or “us”)
        collects, uses, stores, and protects your personal information when you
        use our mobile application and related services (collectively, the
        “Service”).
      </p>
      <p className="mt-5 text-black text-base font-normal">
        By using Influx, you consent to the data practices described in this
        policy. If you do not agree with our policies and practices, please do
        not use our app.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      <h3 className="mt-6 text-black text-lg font-bold">
        1. Information We Collect
      </h3>
      <p className="mt-5 text-black text-base font-bold">
        We collect the following types of information:
      </p>
      {/* a */}
      <p className="mt-5 text-black text-base font-bold ml-4">
        a. Personal Information
      </p>
      <p className="mt-5 text-black text-base font-normal">
        When you sign up or interact with the app, we may collect:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">Full name</li>
        <li className="text-black text-base font-normal">Email address</li>
        <li className="text-black text-base font-normal">
          Phone number (optional)
        </li>
        <li className="text-black text-base font-normal">
          Profile picture (optional)
        </li>
        <li className="text-black text-base font-normal">
          Billing information{" "}
        </li>
      </ul>
      {/* b */}
      <p className="mt-5 text-black text-base font-bold ml-6">b. Usage Data</p>
      <p className="mt-5 text-black text-base font-normal">
        We collect information about how you interact with the app, including:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">
          Pages viewed and books read
        </li>
        <li className="text-black text-base font-normal">
          Time spent on the app
        </li>
        <li className="text-black text-base font-normal">Search queries</li>
        <li className="text-black text-base font-normal">
          Reading preferences and bookmarks
        </li>
      </ul>
      {/* c */}
      <p className="mt-5 text-black text-base font-bold ml-6">
        c. Device & Technical Information
      </p>
      <p className="mt-5 text-black text-base font-normal">
        We may automatically collect:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">
          Device type and model
        </li>
        <li className="text-black text-base font-normal">
          Operating system and version
        </li>
        <li className="text-black text-base font-normal">Search queries</li>
        <li className="text-black text-base font-normal">IP address</li>
        <li className="text-black text-base font-normal">App version</li>
        <li className="text-black text-base font-normal">
          Crash logs and diagnostics
        </li>
      </ul>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 2 */}
      <h3 className="mt-6 text-black text-lg font-bold">
        2. How We Use Your Information
      </h3>
      <p className="mt-5 text-black text-base font-normal">
        We collect information about how you interact with the app, including:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">
          Provide and improve the Service
        </li>
        <li className="text-black text-base font-normal">
          Personalize your reading experience
        </li>
        <li className="text-black text-base font-normal">
          Process transactions and send receipts
        </li>
        <li className="text-black text-base font-normal">
          Offer customer support
        </li>
        <li className="text-black text-base font-normal">
          Notify you about important updates or new features
        </li>
        <li className="text-black text-base font-normal">
          Enforce our Terms and Conditions
        </li>
        <li className="text-black text-base font-normal">
          Analyze user trends and improve app performance
        </li>
      </ul>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 3 */}
      <h3 className="mt-6 text-black text-lg font-bold">
        3. How We Share Your Information
      </h3>
      <p className="mt-5 text-black text-base font-normal">
        We do not sell your personal information.
      </p>
      <p className="mt-5 text-black text-base font-normal">
        We may share your data with:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">
          Service Providers: who help us operate the app (e.g., cloud hosting,
          analytics, payment processors)
        </li>
        <li className="text-black text-base font-normal">
          Legal Authorities: if required to comply with legal obligations
        </li>
        <li className="text-black text-base font-normal">
          Business Transfers: if Influx is involved in a merger, acquisition, or
          sale of assets
        </li>
      </ul>
      <p className="mt-5 text-black text-base font-normal">
        All third-party partners are required to maintain the confidentiality
        and security of your data.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 4 */}
      <h3 className="mt-6 text-black text-lg font-bold">4. Data Security</h3>
      <p className="mt-5 text-black text-base font-normal">
        We take data security seriously and implement appropriate technical and
        organizational measures to protect your personal information. These
        include:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">
          End-to-end encryption
        </li>
        <li className="text-black text-base font-normal">
          Secure user authentication
        </li>
        <li className="text-black text-base font-normal">
          Regular security audits
        </li>
      </ul>
      <p className="mt-5 text-black text-base font-normal">
        However, no method of transmission over the internet or electronic
        storage is 100% secure. We cannot guarantee absolute security.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 5 */}
      <h3 className="mt-6 text-black text-lg font-bold">
        5. Your Rights and Choices
      </h3>
      <p className="mt-5 text-black text-base font-normal">
        Depending on your location, you may have the right to:
      </p>
      <ul className="list-disc ml-8">
        <li className="text-black text-base font-normal">
          Access the personal data we hold about you
        </li>
        <li className="text-black text-base font-normal">
          Request correction or deletion of your data
        </li>
        <li className="text-black text-base font-normal">
          Withdraw consent for data processing
        </li>
        <li className="text-black text-base font-normal">
          Object to certain data uses
        </li>
        <li className="text-black text-base font-normal">Export your data</li>
      </ul>
      <p className="mt-5 text-black text-base font-normal">
        You can manage most settings directly in the app or contact us at{" "}
        <Link href="mailto:support@theinfluxapp.com" className="text-[#59B5F7]">
          support@theinfluxapp.com
        </Link>
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 6 */}
      <h3 className="mt-6 text-black text-lg font-bold">6. Data Retention</h3>
      <p className="mt-5 text-black text-base font-normal">
        We retain your personal data for as long as your account is active or as
        needed to provide the Service. We may also retain and use your
        information to comply with legal obligations or resolve disputes.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 7 */}
      <h3 className="mt-6 text-black text-lg font-bold">
        7. Children’s Privacy
      </h3>
      <p className="mt-5 text-black text-base font-normal">
        Influx is not intended for children under the age of 13 (or 16 in
        certain jurisdictions). We do not knowingly collect personal data from
        children. If you believe a child has provided us with personal
        information, please contact us so we can delete it.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 8 */}
      <h3 className="mt-6 text-black text-lg font-bold">
        8. International Data Transfers
      </h3>
      <p className="mt-5 text-black text-base font-normal">
        If you are accessing Influx from outside our country of operation,
        please be aware that your information may be transferred to, stored, and
        processed in a country where data protection laws may differ.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 9 */}
      <h3 className="mt-6 text-black text-lg font-bold">
        9. Changes to This Policy
      </h3>
      <p className="mt-5 text-black text-base font-normal">
        We may update this Privacy Policy from time to time. If we make material
        changes, we will notify you through the app or by email. Continued use
        of the Service after changes means you accept the updated policy.
      </p>
      <p className="mt-5 text-black text-base font-extrabold">⸻</p>
      {/* 10 */}
      <h3 className="mt-6 text-black text-lg font-bold">10. Contact Us</h3>
      <p className="mt-5 text-black text-base font-normal">
        If you have questions or concerns about this Privacy Policy or your
        data, contact us at:
      </p>
      <p className="mt-5 text-black text-base font-normal">
        Influx Support Team
      </p>
      <p className="mt-5 text-black text-base font-normal">
        Email:{" "}
        <Link target="_blank" href="mailto:support@theinfluxapp.com" className="text-[#59B5F7]">
          support@theinfluxapp.com
        </Link>
      </p>
      <p className="mt-5 text-black text-base font-normal">
        Website:{" "}
        <Link target="_blank" href="www.theinfluxapp.com" className="text-[#59B5F7]">
           www.theinfluxapp.com
        </Link>
      </p>
    </section>
  );
}
