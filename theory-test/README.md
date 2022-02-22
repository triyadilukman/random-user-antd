### Theory Test
1. class is a function, that has a reference to its current execution context, called 'this'.
   'this' keyword is used for assign some value or function.
   when we create variable using new keyword put in front of function, its like brand new empty object created, and get linked to property of class

2. new class syntax makes some variable as instance of Class, and make it call constructor and access all properties
   inside class but except static properties.
   ```sh

   class Meetup {
      constructor(name, location) {
          this.name = name;
          this.location = location;
      }

      // instance method only can call from new syntax
      start() {
          console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
      }

      // this is class method
      static getAddress() {
          console.log('Returned Address');
          /* this.location will return undefined */
          console.log('City: '+ this.location );
      }
    }

    // this is class method
    Meetup.getMembers = function () {
        console.log(Meetup.admin+ ' Returned Members');
    }
   ```

 
3. ```sh
    class Meetup {
        constructor(organizer) {
            this.organizer = organizer;
        }
    }
    class TechMeet extends Meetup {
        constructor(organizer) {
            super(organizer);
        }
    }

    let js = new TechMeet('Mr. JS');
   ```

4. it could be big bang code changes in simple 
   example we used to change export and importing file,
   change how we define function es2015 have arrow function,
   change way we destrucuturing object,
   there is no promise in es5

5. Javascript module, creating own hooks that return random user data, loading, error that needed for UI
   sh
   ```
       const useRandomUsers = (page = 0) => {
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState('');
      const [data, setData] = useState({
        results: [],
        info: null,
      });

      useEffect(() => {
        getUsers(page)
          .then((response) => {
            const { results, info } = response;
            if (results && info) {
              setData({ ...data, results, info })
              setLoading(false)
            }
          })
          .catch((error) => {
            setError(error);
            setLoading(false)
            console.log("error", error);
          });
      }, [page]);

      return { results: data.results, info: data.info, loading, error }
    }
    export default useRandomUsers;
   ```

   Javascript Closure in react
   sh
   ```
    import React, { useCallback, useEffect, useState } from 'react';


    const ClosuresInReact = () => {
      const [count, setCount] = useState('1');

      // increment count as innerfunction can access count
      const incrementCount = useCallback(() => {
        setCount(count + 1);
      }, [count]);


      useEffect(() => {
        const timer = setTimeout(() => {
          incrementCount();
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }, [incrementCount]);
      return <div>{`Counter: ${count}`}</div>;
    };

    export default ClosuresInReact;
   ```

6. - Need create unit test using jest or other javascript test framework.
   - bug bash with product team, stakeholders, users, bussiness team and other that will utilize our app
   - you can try start using testcafe for smoke test https://testcafe.io/

7. Web server can be hardware or software.
   for hardware i suggest using platform such as google cloud platform and amazon web service, 
   that give us less customization and time consuming for setup the server manually
   For the software side not sure what is the pros cons, but in current i have use NGINX for load balancing
   setup location path, proxypass, caching etc.

8. - Blast in a channel we want to deploy a / some services
   - listing all fixing, features usually using jira ticket with already update the versioning
   - make sure all changes are ready at master branch
   - get prerpare staging, beta, production brach already sync with master
   - running pipeline staging, after done make sure our products are expected as we developed.
   - if staging ok then, running pipeline deployment with this flow: approval lead -> one time build prod environment -> deploy beta 
     -> make sure app runing well at beta -> deploy production -> make sure app running well at production.
   - if some incident middle of deployment we can revert with build the app, to our stable build number.
   
9.