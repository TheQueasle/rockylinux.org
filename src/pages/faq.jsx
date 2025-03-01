import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

const Faq = ({ data, pageContext: { locale: language } }) => {
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <Header pageContext="{locale: language}" />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-14">
              <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl md:mx-auto text-center">
                Frequently Asked Questions
              </h2>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="prose mx-auto dark-mode:prose-dark dark:text-gray-300">
              <h5 className="font-bold">
                Where can I download the release candidate?
              </h5>
              <p>
                <a href="https://rockylinux.org/download">
                  https://rockylinux.org/download
                </a>
              </p>
              <hr />
              <h5 className="font-bold">What is a release candidate?</h5>
              <p>
                A release candidate is a beta version of a product that has the
                potential to be stable.The intent of a release candidate is for
                the community to test and validate expected functionality of
                Rocky Linux and report any bugs if present.
              </p>
              <hr />
              <h5 className="font-bold">
                Can I use the release candidate in production?
              </h5>
              <p>
                Under no circumstance should you use a release candidate in a
                production environment. A release candidate is provided for
                testing and validation purposes only.
              </p>
              <hr />
              <h5 className="font-bold">
                How can I help mirror the release candidate and future Rocky
                Linux releases?
              </h5>
              <p>
                Please email{' '}
                <a href="mailto:mirrors@rockylinux.org">
                  mirrors@rockylinux.org
                </a>{' '}
                to express your interest.
              </p>
              <hr />
              <h5 className="font-bold">
                I encountered a bug while testing the release candidate, what
                can I do?
              </h5>
              <p>
                First, create an account using{' '}
                <a href="https://accounts.rockylinux.org/">
                  Rocky Linux Account Services
                </a>
                , then head over to our{' '}
                <a href="https://bugs.rockylinux.org/">Bugzilla server</a> to
                report any bugs.
              </p>
              <hr />
              <h5 className="font-bold">
                How can I get involved with the Testing team?
              </h5>
              <p>
                Please join the{' '}
                <a href="https://chat.rockylinux.org/rocky-linux/channels/testing">
                  ~Testing
                </a>{' '}
                channel on our Mattermost server to get started. There’s also a
                testing topic on the forums for more durable conversation.
              </p>
              <hr />
              <h5 className="font-bold">
                Where can I find the latest news about Rocky Linux?
              </h5>
              <p>
                Stay tuned to our website, Twitter, LinkedIn, forums, and other
                platforms listed in our link directory for the latest
                announcements.
              </p>
              <hr />
              <h5 className="font-bold">
                If Rocky Linux is just a respin of RHEL, what took so long for a
                release candidate?
              </h5>
              <p>
                If our only goal for Rocky Linux was to debrand and repackage
                RHEL, we would have been done much sooner. However, what we had
                to do differently is figure out how we could keep Rocky Linux in
                the hands of the community. Carefully devising this strategy
                ensures that Rocky Linux will never meet the same fate of
                CentOS.
              </p>
              <p>
                The goal was not just to create a community managed RPM based
                distribution of Linux, but to ensure that it will remain freely
                available and always in the control of the community, much like
                Linux itself has. To do that required more than a build
                infrastructure; it required that we put in place the
                foundational structures that enable the community, ensuring that
                Rocky Linux is forever inclusive, free, and open. The
                infrastructure is built from the ground up by many collaborators
                and sponsoring organizations around composability and security
                compliance, providing the substrate for not only the base
                operating system but also an entire community of diverse
                interests to take part in the project.
              </p>
              <hr />
              <h5 className="font-bold">
                If you’re not just repackaging RHEL, then what exactly are you
                doing?
              </h5>
              <p>
                Our goal is to maintain Rocky Linux as a community-oriented
                distribution <i>by</i> the community, <i>for</i> the community.
                To do this, we are establishing the necessary organizational
                structures to ensure that Rocky Linux remains in the hands of
                the community. We want to make sure that it’s not possible for
                what happened to CentOS to happen to Rocky Linux.
              </p>
              <hr />
              <h5 className="font-bold">
                How will you ensure that Rocky Linux truly remains a community
                enterprise operating system?
              </h5>
              <p>
                First, we’ve taken steps to legally protect the Rocky Linux
                name. This means registering its trademarks and various
                associated properties to protect them from being controlled by
                another entity. We’ve achieved this by establishing them under
                the Rocky Enterprise Software Foundation (RESF). Next, we’re
                drafting a community charter that will define the organizational
                structure, objectives, values, and mission behind the legal
                entity that represents Rocky Linux. Critical in this charter is
                the establishment of principles that enable and protect the
                community: transparency, community involvement, open
                development, and independence.{' '}
                <strong>
                  Rocky Linux will never be controlled, purchased, or otherwise
                  influenced by a single entity or organization.
                </strong>{' '}
                Finally, we’re architecting and deploying the necessary
                infrastructure to further enable the community to contribute to
                Rocky Linux.
              </p>
              <hr />
              <h5 className="font-bold">
                What infrastructure is necessary to enable the community?
              </h5>
              <p>
                We’ve established a number of teams to support the various
                efforts associated with developing Rocky Linux:
              </p>
              <ul>
                <li>Community</li>
                <li>Core Infrastructure</li>
                <li>Design</li>
                <li>Documentation</li>
                <li>Installer</li>
                <li>Leadership</li>
                <li>Package Auto-Builders</li>
                <li>Packaging</li>
                <li>Security</li>
                <li>Special Interest Groups (SIGs)</li>
                <li>Web</li>
              </ul>
              <p>
                You can read more about this structure when it’s soon published.
                In order to enable collaboration across and within those teams,
                we needed to deploy our own chat infrastructure, forums, and
                website. Additionally, we’re also creating our build
                infrastructure, which will facilitate the development of the
                core operating system.
              </p>
              <hr />
              <h5 className="font-bold">
                Why does it take so much time to stand up a community and build
                infrastructure?
              </h5>
              <p>
                It’s not terribly difficult to deploy a website, forums, or a
                build infrastructure in a reliable fashion. Our chat program for
                instance, which uses Mattermost, is distributed on a number of
                application servers behind a load balancer and was ready in just
                a couple of weeks. But it does require careful thought and
                planning to do it in a scalable and secure manner when you need
                to ensure vendor and platform agnosticity and long-term
                community involvement.
              </p>
              <hr />
              <h5 className="font-bold">
                So what’s the short answer to all of this? What are some things
                you’re thinking about as you put Rocky Linux together?
              </h5>
              <p>
                How do we carefully shepherd community trust? How do we ensure
                that anyone who wants to participate can not only do so
                immediately, but forever in the future as well? How do we engage
                and enable the community members who might not be as technical
                but want to contribute anyway? Solving for all of these
                challenges will take time, and we would love your help in doing
                so.
              </p>
              <hr />
              <h5 className="font-bold">
                What if I have feedback or my question wasn’t answered here?
              </h5>
              <p>
                Please email us:{' '}
                <a href="mailto:hello@rockylinux.org">hello@rockylinux.org</a>{' '}
                and we’ll get back to you as soon as we can.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Faq;
