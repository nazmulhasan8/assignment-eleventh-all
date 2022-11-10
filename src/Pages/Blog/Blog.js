import React from 'react';
import { Helmet } from 'react-helmet';
const Blog = () => {
    return (
<div>
        <Helmet>
        <title>Yummy Food | Blog</title>
      </Helmet>
        <div>
             <div><h2 style={{ fontSize: '30px' }} className="my-20 text-center">All The Blog Posts</h2></div>
            <div>

            <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
            1. Difference between SQL and NoSQL?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">
                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.SQL is old and sometimes constraining, but also time-tested and increasingly considered a universal interface for data analysis. NoSQL databases are new and flexible, but lack maturity and require user specialization. Pragmatically both models are useful and even growing together.


                </p>
            </div>
        </div>
        <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
           2. What is JWT, and how does it work?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.JWT header consists of token type and algorithm used for signing and encoding. Algorithms can be HMAC, SHA256, RSA, HS256 or RS256Payload consists of the session data called as claims. Below are some of the the standard claims that we can use,Signature is most important part of a JSON Web Token(JWT). Signature is calculated by encoding the header and payload using Base64url Encoding and concatenating them with a period separator. Which is then given to the cryptographic algorithm.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.


                </p>
            </div>
        </div>

        <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
            3. What is the difference between javascript and NodeJS?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">

                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.

                </p>
            </div>
        </div>

        <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
            4. How does NodeJS handle multiple requests at the same time?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">
                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system. They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process. Node is a runtime, and no it is not single threaded, nor is is multithreaded. Confusing? Yes, but true. JavaScript is single threaded. The Node runtime is not. By default, Node only executes one JavaScript instance unless instructed to use more. . When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block. There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.




                </p>
            </div>
        </div>


            </div>
        </div>
        </div>
    );
};

export default Blog;