window.MOCK_EXAM = {
    "title":  "Security+ SY0-801 Mock Exam",
    "questions":  [
                      {
                          "n":  5,
                          "type":  "single",
                          "stem":  [
                                       "A cybersecurity analyst at a large corporation notices suspicious activity from one of the employee accounts. Log entries indicate that the same account is accessing the company\u0027s intranet from two countries just an hour apart.",
                                       "However, the employee is currently on a business trip and is only using wireless connections.",
                                       "Which security anomaly is occurring in this situation?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Distributed denial-of-service (DDoS)"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Brute force attack"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Wireless misconfiguration"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Impossible travel"
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Impossible travel is the correct answer. Impossible travel is a security alert triggered when a user\u0027s account logs in from two distant locations in a short time span, which is a scenario not feasible with normal travel. In this case, the log entries suggest an impossible travel scenario.",
                                              "Wireless misconfiguration is incorrect. The employee used wireless connections. However, this does not explain the suspicious activity detected in the log entries on the employee\u0027s account.",
                                              "Distributed denial-of-service (DDoS) is incorrect. Distributed denial-of-service (DDoS) attacks flood the bandwidth or resources of a targeted system. The scenario concerns an unusual login pattern rather than a resource overload.",
                                              "Brute force attack is incorrect. Brute force can lead to unauthorized access; however, it does not explain the simultaneous logins from distant locations observed in this scenario."
                                          ],
                          "related":  [
                                          "13.1.11 Malicious Activity Indicators"
                                      ],
                          "support":  "q_malicious_activity_indicators_03"
                      },
                      {
                          "n":  6,
                          "type":  "single",
                          "stem":  [
                                       "A forensic analyst uses two methods to acquire evidence from the same storage device. The first image contains active files, deleted file fragments, slack space, and unallocated sectors. The second image contains only files and folders currently recognized by the operating system.",
                                       "The analyst must determine which acquisition is suitable for a complete forensic examination.",
                                       "Which analysis BEST identifies the appropriate image?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The second image, because copying only active files and folders preserves all physical sectors while excluding irrelevant operating system data."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "The second image, because recognized files are more reliable than data recovered from unused disk areas."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The first image, because a bit-level copy includes data beyond the files recognized by the operating system."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "The first image, because collecting additional disk areas eliminates the need to verify the image against the source device."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "The first image, because a bit-level copy includes data beyond the files recognized by the operating system is the correct answer. A bit-level copy captures the entire storage medium, including unallocated space, slack space, and recoverable deleted artifacts. This makes the first image more suitable for a complete forensic examination.",
                                              "The second image, because recognized files are more reliable than data recovered from unused disk areas is incorrect. Copying only recognized files omits disk areas that may contain deleted or hidden evidence. File-system visibility does not determine the evidentiary value of stored data.",
                                              "The first image, because collecting additional disk areas eliminates the need to verify the image against the source device is incorrect. A complete acquisition must still be validated, typically by comparing cryptographic hashes of the source and image. Capturing additional disk areas does not independently prove image integrity.",
                                              "The second image, because copying only active files and folders preserves all physical sectors while excluding irrelevant operating system data is incorrect. A file-level copy does not preserve every physical sector of the source device. Excluded disk areas may contain artifacts relevant to the investigation."
                                          ],
                          "related":  [
                                          "12.2.5 Disk Image Acquisition"
                                      ],
                          "support":  "q_disk_image_acquisition_04"
                      },
                      {
                          "n":  7,
                          "type":  "single",
                          "stem":  [
                                       "A software development company recognizes that some of its employees are vulnerable to phishing attacks. To address this, the company plans to set up a training program.",
                                       "What factors should the company primarily consider while defining such training programs?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The personal interests of the employees"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "The roles performed by the employees"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The length of service of the employees"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "The job titles of the employees"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Employees may perform different roles and have different security training, education, or awareness requirements in each role. Therefore, focusing on job roles rather than job titles is essential in setting up effective security training programs.",
                                              "Job titles might not accurately reflect an employee\u0027s roles, responsibilities, and security training needs.",
                                              "While it may be useful to consider personal interests to enhance engagement, this should not be the primary factor in defining security training programs.",
                                              "While the length of service might influence an employee\u0027s experience or familiarity with security issues, it is not a primary factor in determining the training needs for specific roles."
                                          ],
                          "related":  [
                                          "12.1.3 Preparation"
                                      ],
                          "support":  "q_user_and_role-based_training_01"
                      },
                      {
                          "n":  8,
                          "type":  "single",
                          "stem":  [
                                       "A dismissed employee joins an outside group targeting the former employer. The employee knows the internal systems, and the offboarding record is incomplete. Which access evidence should the team examine to determine whether insider privileges still enable the campaign?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The remaining permissions of the former employee"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "The operating system used by the outside group"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The public website of the outside group"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "The advertising budget of the former employer"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "The correct answer is the remaining permissions of the former employee. This shows whether ineffective offboarding left residual access that an external collaborator could exploit with insider knowledge.",
                                              "The public website of the outside group can reveal public claims but does not establish whether prior privileges remain usable.",
                                              "The operating system used by the outside group describes an external tool environment rather than the residual permissions at the target.",
                                              "The advertising budget of the former employer describes business spending rather than the access retained after dismissal."
                                          ],
                          "related":  [
                                          "2.1.2 Attributes of Threat Actors",
                                          "2.1.8 Internal Threat Actors"
                                      ],
                          "support":  "q_internal_threat_actors_07"
                      },
                      {
                          "n":  9,
                          "type":  "single",
                          "stem":  [
                                       "A company stores customer payment information in a database.",
                                       "The security team wants to ensure that sensitive credit card numbers remain encrypted even when the data is loaded into memory, and that database administrators cannot view the decrypted values.",
                                       "Which database encryption method should the team implement?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Record-level encryption that uses a separate key pair for every row in the table regardless of whether the data requires individual access controls"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Column-level encryption using a feature where the client application provides the decryption key"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Transparent data encryption (TDE) that encrypts database pages when data moves between disk and memory"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Full database encryption combined with operating system volume encryption to provide additional protection for storage files"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Column-level encryption using a feature where the client application provides the decryption key is the correct answer. This approach keeps sensitive field values encrypted and requires the client application to supply the key for decryption. It prevents database administrators from accessing plaintext data.",
                                              "Transparent data encryption (TDE) that encrypts database pages when data moves between disk and memory is incorrect. TDE protects data stored on disk and helps prevent exposure if storage media is stolen. However, it does not prevent authorized database processes from accessing decrypted data.",
                                              "Full database encryption combined with operating system volume encryption to provide additional protection for storage files is incorrect. This protects the database at the storage level but does not specifically prevent administrators from viewing decrypted data through database tools. The encryption is focused on protecting stored files rather than individual sensitive fields.",
                                              "Record-level encryption that uses a separate key pair for every row in the table regardless of whether the data requires individual access controls is incorrect. Record-level encryption can provide fine-grained protection, but it is intended for scenarios requiring separate protection of individual records. It does not directly address the requirement that administrators be unable to decrypt selected sensitive fields without the client-held key."
                                          ],
                          "related":  [
                                          "3.2.6 Database Encryption"
                                      ],
                          "support":  "q_database_encryption_02"
                      },
                      {
                          "n":  10,
                          "type":  "single",
                          "stem":  [
                                       "A threat actor has successfully manipulated a client\u0027s DNS cache, causing the client to resolve domain names to incorrect IP addresses controlled by the threat actor. This allows the threat actor to redirect the client\u0027s network traffic to malicious websites.",
                                       "Which type of attack does this scenario represent?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Client cache poisoning"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Man-in-the-middle attack"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "On-path attack"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Distributed denial-of-service (DDoS)"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Client cache poisoning is the correct answer. Client cache poisoning is the correct answer. Client cache poisoning involves a threat actor manipulating a client\u0027s DNS cache, causing the client to resolve domain names to incorrect IP addresses. This is exactly what is described in the scenario.",
                                              "Man-in-the-middle attack is incorrect. While a man-in-the-middle attack does involve intercepting and possibly altering communication between two parties, it typically involves the threat actor actively impersonating one or both parties to deceive the other. The scenario does not mention any impersonation, only manipulation of the client\u0027s DNS cache.",
                                              "On-path attack is incorrect. On-path attack is incorrect because it involves a threat actor positioning themselves in the communication path between two parties and intercepting and possibly altering the communication without their knowledge. The scenario does not describe any interception of communication, only manipulation of the client\u0027s DNS cache.",
                                              "Distributed denial-of-service (DDoS) is incorrect. Distributed denial-of-service (DDoS) attack is incorrect because a DDoS attack involves overwhelming a network or service with traffic from multiple sources to cause a denial-of-service. The scenario does not describe any overwhelming of network resources or denial of service."
                                          ],
                          "related":  [
                                          "11.1.15 DNS Filtering",
                                          "13.2.10 Domain Name System Attacks"
                                      ],
                          "support":  "q_domain_name_system_attacks_02"
                      },
                      {
                          "n":  11,
                          "type":  "single",
                          "stem":  [
                                       "A company is considering a SOAR platform to automate incident triage.",
                                       "One option has a low purchase price but requires extensive customization, specialized training, and continuous maintenance; another costs more initially but integrates with existing tools and requires less ongoing support.",
                                       "Which analysis best addresses the financial considerations?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Select the higher-priced platform because a larger initial investment guarantees greater operational savings and reliability."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Delay automation until the organization can purchase both platforms and operate them simultaneously to determine which produces better results."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Compare each option\u0027s initial and ongoing costs against its expected long-term efficiency gains."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Select the platform with the lowest purchase price because initial licensing cost is the primary financial concern."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Comparing each option\u0027s initial and ongoing costs against its expected long-term efficiency gains is the correct answer. A sound financial analysis considers tooling, development, infrastructure, training, and maintenance costs alongside potential long-term savings. This comparison provides a more complete basis for selecting an automation solution.",
                                              "Selecting the platform with the lowest purchase price because initial licensing cost is the primary financial concern is incorrect. The lowest purchase price may not represent the lowest total cost when customization and ongoing maintenance are considered. Focusing only on licensing overlooks significant implementation expenses.",
                                              "Selecting the higher-priced platform because a larger initial investment guarantees greater operational savings and reliability is incorrect. A higher initial cost does not guarantee sufficient savings or improved reliability. Expected benefits must be evaluated against both short-term and continuing expenses.",
                                              "Delaying automation until the organization can purchase both platforms and operate them simultaneously to determine which produces better results is incorrect. Operating two platforms would introduce additional licensing, integration, and maintenance costs. A structured cost-benefit analysis is more financially appropriate than duplicating the automation environment."
                                          ],
                          "related":  [
                                          "14.3.4 Automation and Orchestration Implementation"
                                      ],
                          "support":  "q_automation_and_orchestration_implementation_07"
                      },
                      {
                          "n":  12,
                          "type":  "single",
                          "stem":  [
                                       "Once service is restored after a breach, the team holds a review to identify what failed and improve its response procedures. What is the primary purpose of this final incident response phase?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Identifying stakeholders and reporting it to relevant parties"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Analyzing the incident to improve procedures or systems"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Determining the root cause of the incident to eradicate it"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Restoring the affected system to a secure state to reintegrate it"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Analyzing the incident to improve procedures or systems is the correct answer. The final phase of the incident response lifecycle entails \"lessons learned,\" which allows the organization to learn from the incident and make necessary changes to prevent similar incidents in the future.",
                                              "Identifying stakeholders and reporting it to relevant parties is incorrect. During the containment phase in the incident response lifecycle, the incident response team identifies stakeholders and reporting requirements, limiting the scope of the incident and notifying relevant parties.",
                                              "Determining the root cause of the incident to eradicate it is incorrect. The eradication phase follows the containment phase. The primary goal is to eradicate the cause of the incident and involves removing the root cause and restoring affected systems.",
                                              "Restoring the affected system to a secure state to reintegrate it is incorrect. The recovery phase in the incident response lifecycle aims to restore the affected system to a secure state and reintegrate it after containing and eradicating the incident."
                                          ],
                          "related":  [
                                          "12.1.10 Post Incident Activities"
                                      ],
                          "support":  "q_post_incident_activities_01"
                      },
                      {
                          "n":  13,
                          "type":  "single",
                          "stem":  [
                                       "A company plans to expand its existing network, which currently employs a basic star topology, by adding hundreds more devices.",
                                       "What is a potential drawback of this plan?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The network performance can be negatively impacted due to large broadcast domains."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "It does not allow any host to communicate freely with any other host in the same segment."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "It is not capable of handling traffic from a large number of hosts."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "It allows for a zone-based security model."
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "That the network performance can be negatively impacted due to large broadcast domains is the correct answer. With hundreds more devices, the broadcast domain in the star topology would grow significantly. When a host sends a broadcast, all connecting hosts will receive it, which can lead to performance degradation due to the high amount of broadcast traffic.",
                                              "That it allows for a zone-based security model is incorrect. The basic star topology does not inherently allow for a zone-based security model.",
                                              "That it is not capable of handling traffic from a large number of hosts is incorrect. The basic star topology is capable of handling traffic from many hosts. The concern is not about the capacity to handle traffic but rather about potential performance issues due to large broadcast domains.",
                                              "That it does not allow any host to communicate freely with any other host in the same segment is incorrect. In a basic star topology, any host can communicate freely with any other host in the same segment. This is a characteristic of the network, not a drawback."
                                          ],
                          "related":  [
                                          "5.1.4 Switching Infrastructure Considerations"
                                      ],
                          "support":  "q_switching_infrastructure_considerations_01"
                      },
                      {
                          "n":  14,
                          "type":  "single",
                          "stem":  [
                                       "A file policy requires role = manager AND department = development AND project = NewApp. Testing shows that a development engineer on NewApp and a sales manager on OldApp both receive access. Which implementation defect explains both results?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The policy combines the attribute tests using OR"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "The policy compares the subject with a higher clearance"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The policy evaluates only the NewApp project attribute"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "The policy requires every listed attribute to match"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "The policy combines the attribute tests using OR is the correct answer. This choice lets either subject qualify through at least one matching attribute instead of satisfying the required conjunction.",
                                              "The policy requires every listed attribute to match. This choice would deny both test subjects because each lacks at least one required attribute.",
                                              "The policy compares the subject with a higher clearance. This choice does not explain grants based on these role, department, and project test cases.",
                                              "The policy evaluates only the NewApp project attribute. This choice would allow the engineer but deny the sales manager on OldApp, contradicting the observed pair of grants."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_role_and_attribute_based_access_control_05"
                      },
                      {
                          "n":  15,
                          "type":  "single",
                          "stem":  [
                                       "An endpoint service account should have access only to the files and processes required for its task. Which principle should guide its permissions?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "To grant minimum permissions needed to perform tasks"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "To manage firewall rules across an organization\u0027s network"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "To enforce mandatory security configurations on devices"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "To restrict user access to specific network resources"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Granting minimum permissions needed to perform tasks is the correct answer. The purpose of implementing the principle of least privilege (PoLP) in endpoint protection is to grant users, applications, and processes the minimum necessary permissions required to perform their specific duties and tasks.",
                                              "Restricting user access to specific network resources is incorrect. Restricting access to specific network resources is a general access control measure, but it is not specifically related to the principle of least privilege.",
                                              "Enforcing mandatory security configurations on devices is incorrect. Enforcing mandatory security configurations on devices is part of configuration enforcement, which ensures that systems and devices adhere to standardized security configurations. However, it is not the primary purpose of implementing the principle of least privilege.",
                                              "Managing firewall rules across an organization\u0027s network is incorrect. Managing firewall rules across an organization\u0027s network is a specific network security measure, and it is not directly related to the principle of least privilege."
                                          ],
                          "related":  [
                                          "4.4.2 Least Privilege Permission Assignments",
                                          "10.1.9 Endpoint Configuration"
                                      ],
                          "support":  "q_endpoint_configuration_01"
                      },
                      {
                          "n":  16,
                          "type":  "single",
                          "stem":  [
                                       "A major online retailer experiences a sudden halt in its services during the peak holiday shopping season. It traces the cause back to an orchestrated distributed denial of service (DDoS) attack, which overwhelmed the retailer\u0027s servers with traffic, making it impossible for legitimate users to access the site. This attack BEST aligns with which type of threat motivation?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Service disruption"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Espionage"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Financial"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Disinformation"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Service disruption is the correct answer. Service disruption attacks aim to prevent an organization from operating normally. In this case, the DDoS attack disrupted the retailer\u0027s services.",
                                              "Financial is incorrect. The effects of the attack might have financial implications for the retailer, but the primary goal was not financial gain for the attackers.",
                                              "Disinformation is incorrect. Disinformation involves falsifying trusted resources, such as altering website content or using bots to spread false information. In this scenario, no evidence suggests that the attackers spread false information.",
                                              "Espionage is incorrect. Espionage involves stealthy, long-term breaches aimed at acquiring secret information, often for strategic advantage. The DDoS attack in this scenario does not aim at acquiring any secret information."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_motivations_of_threat_actors_11"
                      },
                      {
                          "n":  17,
                          "type":  "single",
                          "stem":  [
                                       "An organization plans to implement a load balancer as part of its network infrastructure to manage the increased web traffic to its services. The organization tasks a network administrator with ensuring that the load balancer configures in line with best security practices to reduce the attack surface and secure the enterprise infrastructure. The network administrator\u0027s responsibilities include evaluating the network appliances, securing connectivity, and considering device placement. What is the MOST effective security measure in this scenario?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Use a proxy server in combination with the load balancer."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Implement a Web Application Firewall (WAF) alongside the load balancer."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Configure the load balancer to operate in a fail-open mode."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Place the load balancer in the screened subnet."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Implementing a Web Application Firewall (WAF) alongside the load balancer is the correct answer. A WAF with a load balancer provides robust security by inspecting web traffic and mitigating threats such as SQL injection and Cross-Site Scripting.",
                                              "Configuring the load balancer to operate in a fail-open mode is incorrect. Configuring the load balancer to operate in a fail-open mode ensures service continuity but may expose the network to potential security risks if the device fails, making this choice less optimal.",
                                              "Using a proxy server in combination with the load balancer is incorrect. Using a proxy server with the load balancer does not offer the most comprehensive security measure compared to other options.",
                                              "Placing the load balancer in the screened subnet is incorrect. Placing the load balancer in the screened subnet is a good security practice but does not directly address potentially exploited web application vulnerabilities via increased web traffic."
                                          ],
                          "related":  [
                                          "5.2.14 Web Application Firewalls",
                                          "8.3.9 Deep and Dark Web"
                                      ],
                          "support":  "q_web_application_firewalls_04"
                      },
                      {
                          "n":  18,
                          "type":  "single",
                          "stem":  [
                                       "A cyber technician reduces a computer\u0027s attack surface by installing a cryptoprocessor that a plug-in PCIe adaptor card can remove. What type of cryptoprocessor can support this requirement?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "HSM"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "TPM"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "PKI"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "CRL"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "HSM is the correct answer. A hardware security module (HSM) meets the analyst\u0027s needs in this scenario. An HSM is a cryptoprocessor that implements hardware through a removable or dedicated form factor, such as plug-in peripheral component interconnect express (PCIe) adaptor cards.",
                                              "CRL is incorrect. Not viable in this scenario, a certificate revocation list (CRL) provides a summation of all revoked and suspended certificates and must be accessible to anyone relying on the validity of the certificate authority\u0027s certificates.",
                                              "PKI is incorrect. Public key infrastructure (PKI) is the framework that establishes trust in using public key cryptography to sign and encrypt messages via digital signatures.",
                                              "TPM is incorrect. A trusted platform module (TPM) is a cryptoprocessor implemented as a module within the CPU on a computer or mobile device."
                                          ],
                          "related":  [
                                          "3.3.11 Cryptoprocessors and Secure Enclaves"
                                      ],
                          "support":  "q_cryptoprocessors_and_secure_enclaves_02"
                      },
                      {
                          "n":  19,
                          "type":  "single",
                          "stem":  [
                                       "Which type of application vulnerability can refer to software flaws associated with the timing or order of events within a software program, which can cause undesirable or unpredictable outcomes through manipulation?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Race conditions"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Memory injection"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Malicious update"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Buffer overflow"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Race conditions is the correct answer. Application race condition vulnerabilities refer to software flaws associated with the timing or order of events within a software program, which can cause undesirable or unpredictable outcomes through manipulation.",
                                              "Memory injection is incorrect. Memory injection vulnerabilities refer to a type of security flaw where an attacker can introduce (inject) malicious code into a running application\u0027s process memory.",
                                              "Buffer overflow is incorrect. To exploit a buffer overflow vulnerability, the attacker passes data that deliberately flood a space of temporary memory.",
                                              "Malicious update is incorrect. A malicious update refers to an update that appears legitimate but contains harmful code, often used by cybercriminals to distribute malware or execute a cyberattack."
                                          ],
                          "related":  [
                                          "8.2.2 Application Vulnerabilities"
                                      ],
                          "support":  "q_application_vulnerabilities_01"
                      },
                      {
                          "n":  20,
                          "type":  "single",
                          "stem":  [
                                       "Which of the following would require that a certificate be placed on the CRL?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The encryption key algorithm is revealed."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "The private key is compromised."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The signature key size is revealed."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "The certificate validity period is exceeded."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "The private key is compromised is the correct answer. If the private key is discovered or compromised, the certificate can no longer be trusted as proof of identity and should be revoked.",
                                              "The certificate validity period is exceeded is incorrect. Expired certificates do not need to be placed on a CRL because they are no longer valid once the expiration date is reached.",
                                              "The signature key size is revealed is incorrect. Knowing the signature key size does not compromise the integrity or trustworthiness of the certificate.",
                                              "The encryption key algorithm is revealed is incorrect. The encryption algorithm used by a certificate is not secret, so revealing it does not require certificate revocation."
                                          ],
                          "related":  [
                                          "3.3.8 Certificate Revocation"
                                      ],
                          "support":  "q_certificate_revocation_08"
                      },
                      {
                          "n":  21,
                          "type":  "single",
                          "stem":  [
                                       "While on patrol, a security guard discovers signs of forced entry on a window leading into the HVAC control room. Upon closer examination, the security guard notices hardly any lights or sounds of machinery working in the room. These are indicators of what type of attack?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Network"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Distributed denial of service"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "On-path"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Brute force (physical)"
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Brute force (physical) is the correct answer. A brute force physical attack is an attack against a physical aspect of a facility containing the physical hardware. Forcing a window and damaging HVAC equipment are excellent indicators of a brute force attack.",
                                              "On-path is incorrect. An on-path attack is where a malicious attacker can place themselves between two recipients to intercept messages sent via the network.",
                                              "Distributed denial of service is incorrect. A distributed denial of service (DDoS) attack consumes a system\u0027s resources, so legitimate requests cannot go through.",
                                              "Network is incorrect. A network-based attack comes over the network and does not require being physically present at the hardware\u0027s location to interfere with it."
                                          ],
                          "related":  [
                                          "13.2.1 Physical Attacks"
                                      ],
                          "support":  "q_physical_attacks_01"
                      },
                      {
                          "n":  22,
                          "type":  "single",
                          "stem":  [
                                       "A security consultant is evaluating the resilience of a company\u0027s server room during power interruptions, focusing on the integration of Power Distribution Units (PDUs) and backup power solutions. Given the critical need for continuous operation, how do backup power generators complement the use of PDUs and UPS systems to ensure server room operations are maintained without interruption?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "It supplies power to PDUs, preventing lapses during an outage."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "It provides prolonged power to PDUs to prevent exhausting the UPS power."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "It filters and stabilizes power before the PDU distributes it."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "It ensures power load balancing occurs across multiple servers."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Providing prolonged power to PDUs to prevent exhausting the UPS power is the correct answer. A backup power generator supplies prolonged power to PDUs to prevent a UPS systems from depleting their immediate resources, ensuring continuous operation of servers and essential devices during extended power outages.",
                                              "Ensuring power load balancing occurs across multiple servers is incorrect. While PDUs ensure efficient power load balancing across servers, maintaining consistent energy distribution, backup power generators mainly act as a reserve energy source and are not primarily responsible for balancing.",
                                              "Supplying power to PDUs, preventing lapses during an outage is incorrect. Though backup power generators serve as a long-term power solution, they do not instantly deliver power in emergencies. Instead, UPS systems serve to provide immediate power responses, bridging the gap until generators activate.",
                                              "Filtering and stabilizing power before the PDU distributes it is incorrect. Although it is important to have stable power, backup power generators focus on supplying continuous energy during outages. They do not primarily work to filter or stabilize the power."
                                          ],
                          "related":  [
                                          "7.3.8 Power Redundancy"
                                      ],
                          "support":  "q_power_redundancy_02"
                      },
                      {
                          "n":  23,
                          "type":  "single",
                          "stem":  [
                                       "A board permits project risk scores up to 40, with an approved variance of five points. A project measures 52, and its sponsor argues that any variance is acceptable. Which treatment decision applies the stated risk tolerance?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Accept 52 as covered by the variance"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Escalate treatment because 52 exceeds 45"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Remove the measured score from reporting"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Raise the approved variance automatically"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Accept 52 as covered by the variance would treat a twelve-point variance as if it were within the approved five-point allowance.",
                                              "Escalate treatment because 52 exceeds 45 applies the permitted variation around the established level and identifies exposure beyond the allowed range for treatment.",
                                              "Raise the approved variance automatically would change the approved tolerance to accommodate the project without leadership authorization.",
                                              "Remove the measured score from reporting would conceal the tolerance breach rather than communicate it for a decision."
                                          ],
                          "related":  [
                                          "15.1.5 Risk Management Processes"
                                      ],
                          "support":  "q_risk_management_processes_23"
                      },
                      {
                          "n":  24,
                          "type":  "single",
                          "stem":  [
                                       "A cybersecurity analyst working for a financial institution handles sensitive customer data and must ensure its integrity and confidentiality. Part of the analyst\u0027s responsibilities is to evaluate the hashing algorithms used to protect the data\u0027s integrity.",
                                       "Which statement accurately describes the purpose and functionality of hashing algorithms in data security?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Hashing algorithms compress data to reduce storage requirements and improve performance."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Hashing algorithms use a public and private key pair to transmit data over the network securely."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Hashing algorithms generate a fixed-size output (a hash value), which represents the input data and is unique to each input."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Hashing algorithms encrypt data to make it unreadable to unauthorized users."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "That hashing algorithms generate a fixed-size output (a hash value), which represents the input data and is unique to each input is the correct answer. Hashing algorithms generate a fixed-size output called a hash value, which represents the input data and is unique to each input. Additionally, they generate unique, fixed-size output (hash value) for any given input. The hash value is a digital fingerprint of the input data and is unique to each input, ensuring data integrity and allowing for efficient data comparison.",
                                              "That hashing algorithms encrypt data to make it unreadable to unauthorized users is incorrect. Hashing algorithms do not relate to encryption but rather to data integrity verification.",
                                              "That hashing algorithms use a public and private key pair to transmit data over the network securely is incorrect. Hashing algorithms do not involve the use of public and private key pairs.",
                                              "That hashing algorithms compress data to reduce storage requirements and improve performance is incorrect. Hashing algorithms do not relate to data compression; instead, they create a unique representation of the input data."
                                          ],
                          "related":  [
                                          "3.1.6 Hashing"
                                      ],
                          "support":  "q_hashing_08"
                      },
                      {
                          "n":  25,
                          "type":  "single",
                          "stem":  [
                                       "Why is SSH generally preferred over Telnet for remote administration?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "SSH encrypts commands and login credentials during transmission."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "SSH transfers data faster because it does not use cryptographic protections."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "SSH allows administrators to manage devices without authentication."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "SSH requires less configuration effort than Telnet in all environments."
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "That SSH encrypts commands and login credentials during transmission is the correct answer. SSH protects administrative sessions by encrypting both credentials and command traffic.",
                                              "That SSH requires less configuration effort than Telnet in all environments is incorrect. Secure protocols often require additional configuration and management compared to insecure alternatives.",
                                              "That SSH allows administrators to manage devices without authentication is incorrect. SSH typically uses authentication mechanisms to verify the identity of users.",
                                              "That SSH transfers data faster because it does not use cryptographic protections is incorrect. Encryption adds security benefits, but it does not make SSH faster by avoiding cryptographic processing."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_secure_protocols_03"
                      },
                      {
                          "n":  26,
                          "type":  "single",
                          "stem":  [
                                       "Which statement best describes the purpose of the data plane in a Zero Trust model?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "It creates organizational security policies and determines acceptable risk levels."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "It establishes and manages secure communication sessions between subjects and resources when access is approved."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "It replaces authentication systems by automatically trusting all approved devices."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "It serves as the sole repository for threat intelligence, behavioral analytics, and security monitoring data used throughout the enterprise."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "That it establishes and manages secure communication sessions between subjects and resources when access is approved is the correct answer. The data plane handles the actual communication pathway used to access resources after authorization has occurred.",
                                              "That it creates organizational security policies and determines acceptable risk levels is incorrect. Policy creation and decision-making functions are performed by components associated with the control plane.",
                                              "That it replaces authentication systems by automatically trusting all approved devices is incorrect. Zero Trust does not automatically trust devices, even when they have previously been approved.",
                                              "That it serves as the sole repository for threat intelligence, behavioral analytics, and security monitoring data used throughout the enterprise is incorrect. Threat intelligence and security data may inform access decisions, but the data plane is responsible for facilitating authorized communications rather than acting as a security data repository."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_control_and_data_planes_in_zero_trust_models_02"
                      },
                      {
                          "n":  27,
                          "type":  "single",
                          "stem":  [
                                       "A company\u0027s system has recently detected suspicious network activity, signaling a possible cybersecurity incident.",
                                       "The incident response team has assembled, and after going through the detection and analysis phases, the containment phase of the incident response process has started.",
                                       "In this phase, what is the primary objective?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Limiting the scope and magnitude of the incident"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Continuing the discovery of indicators of the threat actor activity"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Analyzing the incident and responses to identify whether procedures or systems could be improved"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Removing the source of the threat and restoring the affected systems to a secure state"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Limiting the scope and magnitude of the incident is the correct answer. During the containment phase of the incident response process, the primary goal is to limit the scope and magnitude of the incident, which includes securing data and minimizing the immediate impact on customers and business partners.",
                                              "Continuing the discovery of indicators of the threat actor activity is incorrect. The company\u0027s system has already identified the indicators of threat actor activity, meaning this scenario has already passed.",
                                              "Removing the source of the threat and restoring the affected systems to a secure state is incorrect. This action corresponds to the eradication phase, which comes after the containment phase in the incident response process.",
                                              "Analyzing the incident and responses to identify whether procedures or systems could be improved is incorrect. This objective is part of the lessons learned phase, which is the final stage of the incident response process."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_containment_01"
                      },
                      {
                          "n":  28,
                          "type":  "single",
                          "stem":  [
                                       "A company runs several web applications in separate containers on the same host. During a security assessment, an analyst discovers that one container can access host directories and communicate freely with the other containers. Which change would BEST reduce the potential impact if one application is compromised?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Combine the applications into one container so that administrators can monitor all activity from a central location."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Restrict each container\u0027s access to the host and isolate it from the other containers."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Allow each container to access shared host resources but require application developers to review system logs after suspicious activity occurs."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Install antivirus software inside each container while retaining the existing host permissions."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Restricting each container\u0027s access to the host and isolating it from the other containers is the correct answer. Restrictive isolation limits a compromised application\u0027s ability to affect the host or other containers. Sandboxing reduces impact by controlling access to resources outside the application\u0027s environment.",
                                              "Installing antivirus software inside each container while retaining the existing host permissions is incorrect. Antivirus may detect some threats, but it does not correct weak isolation or excessive host access. Retained permissions could still allow a compromised container to affect other resources.",
                                              "Combining the applications into one container so that administrators can monitor all activity from a central location is incorrect. Combining applications reduces separation and can increase the scope of a compromise. Monitoring does not replace isolation between applications.",
                                              "Allowing each container to access shared host resources but requiring application developers to review system logs after suspicious activity occurs is incorrect. Log reviews can support investigation but do not prevent a compromised container from accessing shared resources. Limiting permissions and enforcing isolation provide stronger containment."
                                          ],
                          "related":  [
                                          "11.2.5 Software Sandboxing"
                                      ],
                          "support":  "q_software_sandboxing_04"
                      },
                      {
                          "n":  29,
                          "type":  "single",
                          "stem":  [
                                       "A popular entertainment company is onboarding a new employee. The company has completed preliminary interview steps and due diligence. Internal security is extremely important, so their human resources department is preparing documentation for the formal employment process. In implementing the process, which solution would help limit the risk of proprietary data that an employee outside the company can use?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Non-disclosure agreement (NDA)"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Identity and access management (IAM)"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Background check"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Analysis and identification"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Non-disclosure agreement (NDA) is the correct answer. When an employee or contractor signs an NDA, they confirm they will not share confidential information with a third party. Signing this type of contract legally protects internal intellectual property.",
                                              "Identity and access management (IAM) is incorrect. IAM refers to creating an account for the user to access the computer system with the appropriate privileges.",
                                              "Background check is incorrect. The background check process essentially determines that a person is who they say they are and are not concealing criminal activity, bankruptcy, or connections that would make them unsuitable or risky employees.",
                                              "Analysis and identification is incorrect. Analysis and identification are a part of the incident lifecycle. During this phase, the identification of a threat can occur."
                                          ],
                          "related":  [
                                          "15.2.5 Legal Agreements"
                                      ],
                          "support":  "q_legal_agreements_10"
                      },
                      {
                          "n":  30,
                          "type":  "single",
                          "stem":  [
                                       "A company has experienced several incidents in which employees claimed they did not enter a restricted networking closet during periods when configuration changes were made to critical equipment. The security manager wants a control that can both discourage unauthorized entry and provide evidence that can be reviewed later to determine who accessed the area. Which solution should the security manager implement?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Post additional warning signs throughout the facility explaining that unauthorized access is prohibited and may result in disciplinary action."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Increase the brightness of the lighting in the networking closet and surrounding hallway."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Install a CCTV system that monitors the networking closet entrance and interior."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Replace the networking closet door with a more durable door constructed from reinforced materials."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Install a CCTV system that monitors the networking closet entrance and interior is the correct answer. CCTV can deter unauthorized activity while also creating recorded evidence that can be reviewed during an investigation.",
                                              "Increase the brightness of the lighting in the networking closet and surrounding hallway is incorrect. Improved lighting can enhance visibility, but it does not create a record of who entered the area.",
                                              "Replace the networking closet door with a more durable door constructed from reinforced materials is incorrect. A stronger door may improve physical protection, but it does not provide monitoring or recorded evidence of access events.",
                                              "Post additional warning signs throughout the facility explaining that unauthorized access is prohibited and may result in disciplinary action is incorrect. Warning signs may discourage unwanted behavior, but they do not document actual activity for later review."
                                          ],
                          "related":  [
                                          "7.2.5 Security Guards and Cameras"
                                      ],
                          "support":  "q_security_guards_and_cameras_04"
                      },
                      {
                          "n":  31,
                          "type":  "single",
                          "stem":  [
                                       "A company determines a certain level of risk that, once exceeded, requires immediate action or reconsideration of the initiative. The company takes pride in its cautious approach to business and generally avoids high-risk activities. Which of the following should the company employ to align with its desired risk management approach?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Risk mitigation"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Risk threshold"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Risk appetite"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Risk tolerance"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Risk threshold is the correct answer. The risk threshold refers to a specific point at which risk becomes unacceptable, necessitates intervention, and the company requires immediate action or reconsideration of the initiative.",
                                              "Risk tolerance is incorrect. Risk tolerance refers to the degree of variability in investment returns an organization is willing to withstand. It doesn\u0027t necessarily correspond to a predetermined required point for action.",
                                              "Risk appetite is incorrect. Risk appetite refers to the total exposed amount an organization wishes to undertake based on risk-return trade-offs for its business objectives.",
                                              "Risk mitigation is incorrect. Risk mitigation does not capture the concept of setting a defined level (threshold) beyond which risk is unacceptable."
                                          ],
                          "related":  [
                                          "15.1.5 Risk Management Processes"
                                      ],
                          "support":  "q_risk_management_processes_11"
                      },
                      {
                          "n":  32,
                          "type":  "single",
                          "stem":  [
                                       "Which kind of malware provides an attacker with administrative control over a target computer through a backdoor?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Remote Access Trojan (RAT)"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Trojan horse"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Crypto-malware"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Potentially unwanted program (PUP)"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Remote Access Trojan (RAT) is the correct answer. A Remote Access Trojan (RAT) provides a backdoor for an attacker to remotely control a computer with administrative control. The other types of malware could be used in conjunction with a RAT, but they do not provide remote control access.",
                                              "Potentially unwanted program (PUP) is incorrect. PUP is software that contains adware, installs toolbars, or has other unclear objectives.",
                                              "Crypto-malware is incorrect. Crypto-malware is ransomware that encrypts files until a ransom is paid.",
                                              "Trojan horse is incorrect. A Trojan horse is a malicious program that is disguised as legitimate or desirable software."
                                          ],
                          "related":  [
                                          "13.1.1 Malware Classification",
                                          "13.1.6 Backdoors and Remote Access Trojans"
                                      ],
                          "support":  "q_backdoors_and_remote_access_trojans_02"
                      },
                      {
                          "n":  33,
                          "type":  "single",
                          "stem":  [
                                       "A healthcare organization is enhancing patient privacy and elects to use obfuscation for social security numbers to replace the first five digits with \"XXX-XX.\" What type of obfuscation is the organization using to conceal personal data?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Steganography"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Data masking"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Salting"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Tokenization"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Data masking is the correct answer. Here, the organization is masking data, which occurs when a user redacts all or part of the contents of a database field by substituting the string, such as using \"x\" in its place.",
                                              "Salting is incorrect. Salting is a cryptography hash method where the user hashes data used for something like a password, and the system cannot decrypt it back to the plaintext password that generated it.",
                                              "Steganography is incorrect. Steganography occurs when a user embeds information, such as a document, within an unexpected source, such as a message hidden in a picture, to guise its true appearance.",
                                              "Tokenization is incorrect. Tokenization occurs when a randomly generated token replaces all or part of the value of a database field while maintaining the original data on a separate token server."
                                          ],
                          "related":  [
                                          "3.2.10 Obfuscation"
                                      ],
                          "support":  "q_obfuscation_04"
                      },
                      {
                          "n":  34,
                          "type":  "single",
                          "stem":  [
                                       "A developer fixes a parser that copies input into a 64-byte buffer. The parser accepts up to 64 bytes of payload, with bookkeeping stored separately. The reviewer wants evidence that the fix enforces the payload boundary. Which test set directly exercises that boundary?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Submit three different 32-byte payloads"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Submit one 16-byte payload three times"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Submit 8-, 16-, and 24-byte payloads"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Submit 63-, 64-, and 65-byte payloads"
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Submit 63-, 64-, and 65-byte payloads. This checks just below, at, and above the specified capacity; the oversized input should be rejected before a write exceeds the buffer.",
                                              "Submit three different 32-byte payloads. This varies content while remaining well below the 64-byte limit, leaving boundary enforcement untested.",
                                              "Submit one 16-byte payload three times. This tests repetition of a small input rather than handling of data at the allocation boundary.",
                                              "Submit 8-, 16-, and 24-byte payloads. This varies input length but keeps every input below the limit where the buffer-overflow fix needs verification."
                                          ],
                          "related":  [
                                          "8.2.2 Application Vulnerabilities",
                                          "13.3.1 Application Attacks"
                                      ],
                          "support":  "q_application_vulnerabilities_11"
                      },
                      {
                          "n":  35,
                          "type":  "single",
                          "stem":  [
                                       "The newly appointed IT manager of a growing e-commerce company has initiated a security review to ensure compliance with industry standards. This process includes defining clear roles and responsibilities for data and system owners to optimize the organization\u0027s security posture. According to the IT manager\u0027s new plan, which of the following would be the primary responsibility of a system owner in the context of cybersecurity?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Establishing the security controls for systems"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Prosecuting individuals who perpetrate cyberattacks"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Conducting network penetration tests"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Implementing a disaster recovery plan"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Establishing the security controls for systems is the correct answer. System owners are primarily responsible for defining, implementing, and maintaining appropriate security controls for the systems under their authority.",
                                              "Conducting network penetration tests is incorrect. Specialized cybersecurity professionals perform penetration tests rather than system owners. These tests involve simulating cyber attacks to identify and address security vulnerabilities.",
                                              "Implementing a disaster recovery plan is incorrect. Although system owners play a role in disaster recovery, this task is generally the responsibility of a disaster recovery team or a business continuity team. These teams design and implement strategies to ensure business operations can continue after a disaster.",
                                              "Prosecuting individuals who perpetrate cyberattacks is incorrect. Law enforcement agencies and legal professionals manage legal actions against cybercriminals, not system owners. System owners should focus on improving system security and mitigating potential threats."
                                          ],
                          "related":  [
                                          "16.1.6 Privacy Data"
                                      ],
                          "support":  "q_privacy_data_14"
                      },
                      {
                          "n":  36,
                          "type":  "single",
                          "stem":  [
                                       "The IT manager in your organization proposes taking steps to deflect a potential threat actor. The proposal includes the following:",
                                       "- Create and follow onboarding and off-boarding procedures.",
                                       "- Employ the principal of least privilege.",
                                       "- Have appropriate physical security controls in place.",
                                       "Which type of threat actor do these steps guard against?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Script kiddie"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Hacktivist"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Insider"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Competitor"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Insider is the correct answer. Because insiders are one of the most dangerous and overlooked threats to an organization, you need to take the appropriate steps to protect against them, such as requiring mandatory vacations, creating and following onboarding and off-boarding procedure, employing the principal of least privilege, and having appropriate physical security controls in place.",
                                              "Script kiddie is incorrect. A script kiddie is an individual who carries out an attack by using scripts or programs written by more advanced hackers.",
                                              "Hacktivist is incorrect. A hacktivist is any individual whose attacks are politically motivated.",
                                              "Competitor is incorrect. A competitor threat actor carries out attacks on behalf of an organization and targets competing companies."
                                          ],
                          "related":  [
                                          "2.1.2 Attributes of Threat Actors",
                                          "2.1.8 Internal Threat Actors"
                                      ],
                          "support":  "q_internal_threat_actors_04"
                      },
                      {
                          "n":  37,
                          "type":  "single",
                          "stem":  [
                                       "A tech department reviews the current model for incident response procedures in response to a serious incident at the company.",
                                       "What part of the process should they focus on for a review of data to determine the legitimacy of a genuine incident?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Analysis"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Detection"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Containment"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Eradication"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Analysis is the correct answer. Analysis occurs when the first responder analyzes the data to determine whether it identified a genuine incident and assigns the appropriate priority level.",
                                              "Containment is incorrect. Containment occurs after detection and analysis. It is the process of removing affected components from the larger environment.",
                                              "Eradication is incorrect. The eradication process applies mitigation techniques and controls to remove the intrusion tools and unauthorized configuration changes from systems.",
                                              "Detection is incorrect. Detection is the process of correlating events from network and system data sources and determining whether they are indicators of an incident. When a suspicious event triggers a concern, a notification must be sent to the appropriate person on the computer incident response team (CIRT), who can take charge of the situation and formulate the appropriate response."
                                          ],
                          "related":  [
                                          "12.1.10 Post Incident Activities"
                                      ],
                          "support":  "q_analysis_01"
                      },
                      {
                          "n":  38,
                          "type":  "single",
                          "stem":  [
                                       "A transportation company uses an ICS/SCADA environment to manage automated rail signaling systems across multiple regions.",
                                       "Leadership wants to improve operational visibility by allowing operators at a central control center to monitor equipment status and make adjustments when problems occur at remote locations.",
                                       "Which solution should the company implement?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Replace all field devices with standalone controllers that operate independently and do not communicate with a central management platform."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Deploy a SCADA system that gathers data from remote field devices and enables centralized management of those systems."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Configure each remote site to manage signaling equipment locally with no centralized monitoring capability, while requiring operators to manually travel to every location whenever adjustments are needed."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Install a document management platform that stores operational reports and training materials but does not interact with industrial equipment."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Deploying a SCADA system that gathers data from remote field devices and enables centralized management of those systems is the correct answer. SCADA systems are designed to collect data from remote field devices and support centralized monitoring and management. This approach provides visibility and control across multiple sites.",
                                              "Replacing all field devices with standalone controllers that operate independently and do not communicate with a central management platform is incorrect. Independent controllers may operate equipment locally, but they do not provide the centralized oversight required in the scenario. Operators would have limited visibility into remote operations.",
                                              "Installing a document management platform that stores operational reports and training materials but does not interact with industrial equipment is incorrect. Document management systems help organize information but do not monitor or control industrial processes. They do not fulfill operational management requirements.",
                                              "Configuring each remote site to manage signaling equipment locally with no centralized monitoring capability, while requiring operators to manually travel to every location whenever adjustments are needed, is incorrect. Managing each site independently reduces centralized visibility and operational efficiency. It also increases the effort required to respond to issues across geographically distributed locations."
                                          ],
                          "related":  [
                                          "6.2.3 Industrial Control Systems",
                                          "15.3.1 Data Gathering and Scoping for Assessments"
                                      ],
                          "support":  "q_industrial_control_systems_04"
                      },
                      {
                          "n":  39,
                          "type":  "single",
                          "stem":  [
                                       "A sole proprietorship construction company contacted an information technology (IT) consultant for technical support for a computer issue. After resolving that issue, the consultant suggested the construction company enable computer encryption. Why might the company want to enable encryption on its computers\u0027 hard drives?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "To prevent phishing"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "To prevent data removal from a stolen device"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "To prevent theft"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "To slow down data removal from a stolen device."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "To prevent data removal from a stolen device is the correct answer. Enabling hard drive encryption is a basic step to prevent data loss in the event of a stolen device. Without it, anyone can easily access the stolen device, regardless of needing a password.",
                                              "To slow down data removal from a stolen device is incorrect. The purpose of hard drive encryption is to prevent data loss in the event of a stolen device. However, as technology improves, malicious actors can exploit weaknesses in encryption.",
                                              "To prevent phishing is incorrect. Hard drive encryption does not prevent phishing. However, malicious actors could use information from an unencrypted hard drive to phish other people.",
                                              "To prevent theft is incorrect. Hard drive encryption may dissuade theft, but it will not prevent theft. A malicious actor can still wipe a hard drive to reuse it."
                                          ],
                          "related":  [
                                          "10.1.3 Endpoint Protection",
                                          "10.1.12 Hardening Techniques",
                                          "10.2.4 Full Device Encryption and External Media",
                                          "16.1.11 Data Protection"
                                      ],
                          "support":  "q_endpoint_protection_03"
                      },
                      {
                          "n":  40,
                          "type":  "single",
                          "stem":  [
                                       "An information technology manager audited the company\u0027s support tickets and decided to implement a new standard operating procedure. The manager noticed a trend with the tickets, where the majority were for new computer setups. What security control function would the manager\u0027s new standard operating procedure have?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Corrective"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Directive"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Compensating"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Deterrent"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Directive is the correct answer. A directive control enforces a rule of behavior, such as a policy, best practice standard, or standard operating procedure (SOP).",
                                              "Compensating is incorrect. Compensating controls are a substitute for a principal control, as recommended by a security standard, and afford the same (or better) level of protection. However, they use a different methodology or technology.",
                                              "Deterrent is incorrect. Deterrent controls may not physically or logically prevent access, but they psychologically discourage an attacker from attempting an intrusion. Deterrent controls could include signs and warnings of legal penalties against trespass or intrusion.",
                                              "Corrective is incorrect. Corrective controls eliminate or reduce the impact of a security policy violation. A corrective control occurs after an attack."
                                          ],
                          "related":  [
                                          "1.2.2 Security Control Functional Types"
                                      ],
                          "support":  "q_security_control_functional_types_02"
                      },
                      {
                          "n":  41,
                          "type":  "single",
                          "stem":  [
                                       "A company notices that several employees are being logged out of a web application unexpectedly. Shortly afterward, security logs show new sessions being established from unfamiliar IP addresses using valid session identifiers. A security analyst suspects a replay attack is occurring. Which action should the analyst implement to reduce the likelihood of the attack succeeding?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Modify the application to return generic error messages and suppress detailed debugging information."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Increase the maximum size of user-submitted input fields to reduce processing errors and improve compatibility."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Configure the application to require reauthentication after a defined period and limit the lifespan of session tokens."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Disable XML external entity processing on all web servers that host the application."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Configure the application to require reauthentication after a defined period and limit the lifespan of session tokens is the correct answer. Replay attacks rely on the reuse of valid session data. Limiting token lifetime and requiring reauthentication reduces the window in which stolen tokens can be used.",
                                              "Disable XML external entity processing on all web servers that host the application is incorrect. This helps mitigate XML injection attacks such as XXE. It does not address the reuse of stolen session tokens.",
                                              "Modify the application to return generic error messages and suppress detailed debugging information is incorrect. Reducing error information can limit information disclosure but does not prevent attackers from replaying captured session credentials. This control addresses a different risk.",
                                              "Increase the maximum size of user-submitted input fields to reduce processing errors and improve compatibility is incorrect. Input field size limits are unrelated to session management. Replay attacks involve reusing valid authentication data rather than exploiting field-length restrictions."
                                          ],
                          "related":  [
                                          "13.3.2 Replay Attacks"
                                      ],
                          "support":  "q_replay_attacks_03"
                      },
                      {
                          "n":  42,
                          "type":  "single",
                          "stem":  [
                                       "Which of the following does a threat actor need in order to support a high-level sophisticated attack?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Resources and funding"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Data exfiltration"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Disinformation"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "System permissions"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Resources and funding is correct. A high level of capability must be supported by resources and funding. Sophisticated threat actor groups need to be able to acquire resources, such as customized attack tools and skilled strategists, designers, coders, hackers, and social engineers. The most capable threat actor groups receive funding from nation-states and organized crime.",
                                              "An internal/insider threat actor (such as an employee or contractor) has been granted permissions on the system. While permissions might be useful, if a threat actor requires resources and funding, the threat actor is normally external.",
                                              "Disinformation and data exfiltration are strategies often used by an external threat actor. Data exfiltration transfers a copy of some type of valuable information from a computer or network without authorization. Disinformation falsifies some type of trusted resource, such as changing the content of a website, manipulating search engines to inject fake sites, or using bots to post false information to social media sites."
                                          ],
                          "related":  [
                                          "2.1.2 Attributes of Threat Actors"
                                      ],
                          "support":  "q_attributes_of_threat_actors_07"
                      },
                      {
                          "n":  43,
                          "type":  "single",
                          "stem":  [
                                       "A company receives a litigation notice related to a suspected intellectual property theft case. The IT department\u0027s standard practice is to automatically delete email older than one year and rotate security logs every 30 days. The security manager must ensure that potentially relevant evidence remains available for the investigation. What should the security manager do first?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Suspend the routine deletion of potentially relevant records and data subject to legal hold."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Continue normal retention schedules until investigators identify specific files that must be preserved."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Create backup copies of selected emails and logs while allowing automated deletion processes to continue for all original records."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Have administrators review employee mailboxes and remove nonessential messages before preserving records so investigators only examine relevant data."
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Suspending the routine deletion of potentially relevant records and data subject to legal hold is the correct answer. A legal hold requires potentially relevant information to be preserved. Suspending routine deletion helps ensure evidence remains available for the investigation.",
                                              "Continuing normal retention schedules until investigators identify specific files that must be preserved is incorrect. Continuing normal deletion processes could result in relevant evidence being lost. Preserving data should occur before records are removed.",
                                              "Creating backup copies of selected emails and logs while allowing automated deletion processes to continue for all original records is incorrect. Backup copies do not eliminate the need to preserve original records that may be relevant to the case. Evidence could still be lost if original data is deleted.",
                                              "Having administrators review employee mailboxes and removing nonessential messages before preserving records so investigators only examine relevant data is incorrect. Altering or removing data before preservation can create questions about evidence integrity. Records should be preserved before any filtering or review occurs."
                                          ],
                          "related":  [
                                          "12.2.2 Due Process and Legal Hold"
                                      ],
                          "support":  "q_due_process_and_legal_hold_02"
                      },
                      {
                          "n":  44,
                          "type":  "single",
                          "stem":  [
                                       "A large multinational corporation is implementing a data protection strategy. The company has a complex IT environment with a mix of physical servers, virtual machines, and cloud-based services. The primary concern is the ability to track and monitor data modifications and revert to previous states if necessary, especially in the event of local failures, natural disasters, or malicious attacks. Which type of journaling would be MOST suitable for this organization?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "File system journaling"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Database journaling"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Application-level journaling"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Remote journaling"
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Remote journaling is the correct answer. Remote journaling creates and maintains a journal of data changes at a separate, remote location, allowing for data recovery and ensuring business continuity in case of local failures, natural disasters, or malicious attacks. This makes it the most suitable option for the organization\u0027s primary concern.",
                                              "File system journaling is incorrect. File system journaling, such as the Journaled File System (JFS) or the New Technology File System (NTFS), records all changes made to files, allowing for data recovery and consistency checks after unexpected system shutdowns or crashes. While it is useful for tracking and monitoring data modifications, it may not provide the necessary protection in the event of local failures, natural disasters, or malicious attacks.",
                                              "Database journaling is incorrect. Database journaling records changes to data within a database. While it can be useful for tracking and monitoring data modifications within a database, it may not provide the necessary protection in the event of local failures, natural disasters, or malicious attacks.",
                                              "Application-level journaling is incorrect. Application-level journaling records changes to data within a specific application. While it can be useful for tracking and monitoring data modifications within a specific application, it may not provide the necessary protection in the event of local failures, natural disasters, or malicious attacks."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_advanced_data_protection_09"
                      },
                      {
                          "n":  45,
                          "type":  "single",
                          "stem":  [
                                       "A company has adopted automation to support rapid cloud expansion. Whenever a new server is requested, an orchestration workflow automatically deploys the virtual machine, installs endpoint protection software, applies encryption settings, configures logging, and connects the system to monitoring tools. During a security review, management determines that new systems are consistently deployed faster and with fewer configuration errors than before. Which automation and scripting use case is MOST directly responsible for these outcomes?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Anomaly detection"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Resource provisioning"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Ticket management"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "User provisioning"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Resource provisioning is the correct answer. Resource provisioning automates the deployment and configuration of infrastructure resources and security services. The scenario focuses on creating and securing new servers through an automated workflow.",
                                              "User provisioning is incorrect. User provisioning manages user accounts, permissions, and access rights. The scenario involves deploying infrastructure rather than onboarding users or managing identities.",
                                              "Anomaly detection is incorrect. Anomaly detection identifies unusual activity that may indicate threats or operational issues. It analyzes behavior but does not deploy and configure new infrastructure resources.",
                                              "Ticket management is incorrect. Ticket management automates the creation, tracking, and routing of incidents and service requests. It supports operational workflows but does not provision servers or security tools."
                                          ],
                          "related":  [
                                          "14.3.2 Automation and Scripting Use Cases"
                                      ],
                          "support":  "q_automation_and_scripting_use_cases_10"
                      },
                      {
                          "n":  46,
                          "type":  "single",
                          "stem":  [
                                       "The IT department at a large corporation notices multiple unsuccessful login attempts on many different accounts belonging to one user in a short time frame, resulting in account lockout. The attempts involved using various combinations of the user\u0027s personally identifiable information as possible passwords. What type of password attack is MOST likely occurring in this situation?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Rainbow table attack"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Dictionary attack"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Credential stuffing"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Brute-force attack"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Credential stuffing is the correct answer. In a credential-stuffing attack, attackers employ usernames and passwords leaked from other breaches and try them on different websites, banking on the fact that many users reuse their passwords across multiple sites.",
                                              "Dictionary attack is incorrect. A dictionary attack involves an attacker trying prearranged lists of common words or phrases as passwords. This scenario does not suggest that the attacker is using common words or phrases.",
                                              "Brute-force attack is incorrect. A brute-force attack involves systematically trying all possible combinations of passwords until finding the correct one. This scenario does not describe a systematic search of all possible passwords.",
                                              "Rainbow table attack is incorrect. A rainbow table attack involves using a precomputed table for reversing cryptographic hash functions. The scenario does not suggest the use of hash functions or precomputed tables."
                                          ],
                          "related":  [
                                          "13.2.14 Password Attacks"
                                      ],
                          "support":  "q_password_attacks_03"
                      },
                      {
                          "n":  47,
                          "type":  "single",
                          "stem":  [
                                       "A security analyst is investigating a series of failed login attempts across multiple servers. Several log entries contain the same event message, but the analyst needs to determine which server generated each event and establish the order in which the activity occurred. Which information should the analyst rely on most heavily?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The event message text describing the failed login attempt."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "A detailed summary report that combines login events with long-term performance statistics and system utilization trends."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The event metadata showing the source and timestamp of each event."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "A list of currently installed software packages on each server."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "The event metadata showing the source and timestamp of each event is the correct answer. Metadata identifies the event source and records when the event occurred. This information helps establish both origin and timeline.",
                                              "The event message text describing the failed login attempt is incorrect. The event message explains what happened but may not uniquely identify where or when the event occurred. Multiple systems can generate the same message.",
                                              "A list of currently installed software packages on each server is incorrect. Installed software information may provide system context but does not identify the specific source or timing of an event. It is not useful for building an event timeline.",
                                              "A detailed summary report that combines login events with long-term performance statistics and system utilization trends is incorrect. Long-term summary reports can provide broader insights but are not the most direct source for determining event origin and sequence. The analyst needs specific event-level details."
                                          ],
                          "related":  [
                                          "12.3.2 Log Data",
                                          "12.3.8 Metadata"
                                      ],
                          "support":  "q_log_data_02"
                      },
                      {
                          "n":  48,
                          "type":  "single",
                          "stem":  [
                                       "What is one of the main advantages of Active Directory being a hierarchical database?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "It allows for faster internet speeds."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "It allows for increased storage capacity."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "It allows for automatic software updates."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "It allows for organization and sorting of user accounts and resources."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Allowing for organization and sorting of user accounts and resources is the correct answer. One of the main advantages of Active Directory being a hierarchical database is that it allows for the organization and sorting of user accounts and resources. This can be done by location, function, department, or any other criteria that suits the needs of the organization.",
                                              "Allowing for faster internet speeds is incorrect. The hierarchical nature of Active Directory does not directly impact internet speeds. Internet speeds are typically determined by the network infrastructure and internet service provider.",
                                              "Allowing for automatic software updates is incorrect. While Active Directory can be used to manage software updates, this is not a direct result of it being a hierarchical database. Software updates are typically managed through specific services or tools, such as Windows Server Update Services (WSUS).",
                                              "Allowing for increased storage capacity is incorrect. The hierarchical nature of Active Directory does not increase storage capacity. Storage capacity is determined by the physical storage hardware and the file system in use."
                                          ],
                          "related":  [
                                          "1.1.5 Access Control Fundamentals",
                                          "4.2.2 Active Directory Facts",
                                          "4.2.3 Active Directory Components"
                                      ],
                          "support":  "q_active_directory_facts_05"
                      },
                      {
                          "n":  49,
                          "type":  "single",
                          "stem":  [
                                       "The IT department at a large corporation noticed an unfamiliar software application running on its network. The team did not consult with the IT department before implementing this tool. Upon investigation, they discovered that a team in the marketing department started using a new cloud-based project management tool to improve their workflow efficiency. In the context of cybersecurity threats, what does this situation BEST exemplify?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Shadow IT"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Nation-state"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Insider threat"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Careless password management"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Shadow IT is the correct answer. It refers to hardware, software, and services used within an organization without explicit approval from the IT department. The scenario described, where the marketing team started using a new project management tool without consulting the IT department, is a classic example of Shadow IT.",
                                              "While this can be a security risk, careless password management refers to using weak passwords or sharing passwords with others.",
                                              "Insider threat is a potential risk posed by individuals with inside information about the company\u0027s security practices, data, and computer systems.",
                                              "Nation-state activity usually involves cyberattacks conducted by a state or state-sponsored actors against another state or corporation to gather intelligence or disrupt operations."
                                          ],
                          "related":  [
                                          "8.1.4 Shadow IT and Rogue Devices"
                                      ],
                          "support":  "q_attributes_of_threat_actors_04"
                      },
                      {
                          "n":  50,
                          "type":  "single",
                          "stem":  [
                                       "A multinational company is migrating sensitive customer data to a cloud environment. The organization operates in several countries with strict regulations governing where personal data can be stored and processed. During the cloud design phase, the security team must ensure the architecture complies with these legal requirements. Which action BEST addresses the organization\u0027s data sovereignty concerns?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Deploy all workloads in the cloud region with the lowest operational cost, regardless of where the data is stored."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Select cloud regions and data locations that meet regulatory requirements for data residency and cross-border data transfers."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Increase the number of virtual machines used by the application to improve scalability and availability."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Store all sensitive data in a public cloud object storage service and rely solely on encryption, even if the data is replicated to countries with conflicting legal requirements."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Selecting cloud regions and data locations that meet regulatory requirements for data residency and cross-border data transfers is the correct answer. Data sovereignty requirements are addressed by carefully choosing where data and workloads are hosted to comply with applicable regulations.",
                                              "Deploying all workloads in the cloud region with the lowest operational cost, regardless of where the data is stored is incorrect. Cost savings do not eliminate legal obligations regarding the location and processing of regulated data.",
                                              "Increasing the number of virtual machines used by the application to improve scalability and availability is incorrect. Scalability improves performance and capacity but does not address jurisdictional or residency requirements for data.",
                                              "Storing all sensitive data in a public cloud object storage service and relying solely on encryption, even if the data is replicated to countries with conflicting legal requirements is incorrect. Encryption helps protect data, but organizations must still comply with laws governing where data is stored and transferred."
                                          ],
                          "related":  [
                                          "5.1.17 Architecture Considerations",
                                          "6.1.13 Cloud Architecture Considerations",
                                          "16.1.5 Data Sovereignty and Geographical Considerations"
                                      ],
                          "support":  "q_cloud_architecture_features_02"
                      },
                      {
                          "n":  51,
                          "type":  "single",
                          "stem":  [
                                       "Which principle helps reduce the risk associated with AI systems that can execute code or perform automated actions?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Open access"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Providing administrative rights to all automated AI processes"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Unlimited permissions"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Least privilege"
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Least privilege is the correct answer. Least privilege limits access to only the permissions necessary to perform required tasks.",
                                              "Open access is incorrect. Open access allows broader system interaction than may be necessary, increasing risk.",
                                              "Unlimited permissions is incorrect. Excessive permissions can enable more significant damage if code executes improperly.",
                                              "Providing administrative rights to all automated AI processes is incorrect. Granting administrative rights broadly increases the impact of mistakes or malicious actions."
                                          ],
                          "related":  [
                                          "8.5.7 AI Data, Privacy, and Operational Risks"
                                      ],
                          "support":  "q_ai_data_privacy_and_operational_risks_07"
                      },
                      {
                          "n":  52,
                          "type":  "single",
                          "stem":  [
                                       "A forensic team has collected a large amount of electronically stored information (ESI) from several employee computers during an internal fraud investigation. The lead investigator needs to identify documents relevant to the case, reduce duplicate data, and organize evidence so it can be efficiently reviewed and presented if needed. Which action would BEST support this objective?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Retain all collected files in their original locations and manually review every file without categorization."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Use an e-discovery process to search, de-duplicate, and tag relevant evidence."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Convert all collected evidence into printed copies immediately and discard the electronic versions to simplify the review process."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Focus only on files that were recently modified and ignore metadata because it is unlikely to be relevant."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Using an e-discovery process to search, de-duplicate, and tag relevant evidence is the correct answer. E-discovery helps investigators locate relevant information, remove duplicate data, and organize evidence using searches and tags. This makes large collections of data more manageable for review and disclosure.",
                                              "Retaining all collected files in their original locations and manually reviewing every file without categorization is incorrect. Manual review without organization can be slow and inefficient when dealing with large volumes of evidence. Categorization tools help investigators focus on relevant information.",
                                              "Focusing only on files that were recently modified and ignoring metadata because it is unlikely to be relevant is incorrect. Metadata can provide important context about files and their history. Ignoring it may cause investigators to overlook valuable evidence.",
                                              "Converting all collected evidence into printed copies immediately and discarding the electronic versions to simplify the review process is incorrect. Discarding electronic versions can remove useful searchable information and reduce the ability to validate evidence. Electronic evidence should be preserved appropriately."
                                          ],
                          "related":  [
                                          "12.2.7 Reporting"
                                      ],
                          "support":  "q_reporting_02"
                      },
                      {
                          "n":  53,
                          "type":  "single",
                          "stem":  [
                                       "A security team receives threat intelligence indicating that a newly discovered malware strain is bypassing traditional signature-based detection tools. No alerts have been triggered within the organization\u0027s environment, but the team wants to determine whether the malware is already present. What is the MOST appropriate action?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Conduct a threat-hunting initiative using the available threat intelligence to search for indicators of compromise."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Immediately disconnect every endpoint from the network to eliminate any possibility of attacker communication and prevent future compromise."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Wait until an intrusion detection system generates an alert before beginning any investigation."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Restore all critical systems from backups to ensure that no malware remains in the environment."
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Conducting a threat-hunting initiative using the available threat intelligence to search for indicators of compromise is the correct answer. Threat hunting proactively searches for evidence of attacker activity based on informed hypotheses and threat intelligence.",
                                              "Waiting until an intrusion detection system generates an alert before beginning any investigation is incorrect. Waiting for an alert is a reactive approach and may allow an undetected threat to remain active longer than necessary.",
                                              "Restoring all critical systems from backups to ensure that no malware remains in the environment is incorrect. Restoring systems is part of recovery activities and should not be performed without evidence that systems are compromised.",
                                              "Immediately disconnecting every endpoint from the network to eliminate any possibility of attacker communication and preventing future compromise is incorrect. Disconnecting all endpoints is a containment action that may be unnecessarily disruptive when the presence of a threat has not yet been confirmed."
                                          ],
                          "related":  [
                                          "12.1.6 Threat Hunting"
                                      ],
                          "support":  "q_threat_hunting_02"
                      },
                      {
                          "n":  54,
                          "type":  "single",
                          "stem":  [
                                       "A security operations center receives an external advisory from a cybersecurity agency warning about a newly discovered vulnerability that is being actively exploited. The advisory includes indicators of compromise (IOCs) and recommended monitoring actions. What is the MOST appropriate use of this external advisory by the security team?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Compare the advisory information with internal systems and alerts to identify potential signs of compromise."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Publish the advisory to all external stakeholders before determining whether any company systems are affected."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Immediately disconnect all internet-facing systems until the vulnerability is fully understood."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Delay any investigation until the organization receives a direct notification from a customer."
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Comparing the advisory information with internal systems and alerts to identify potential signs of compromise is the correct answer. External advisories provide information that can help organizations identify and investigate potential threats affecting their environments.",
                                              "Immediately disconnecting all internet-facing systems until the vulnerability is fully understood is incorrect. Disconnecting all internet-facing systems may be disruptive and is not automatically required when an advisory is received.",
                                              "Delaying any investigation until the organization receives a direct notification from a customer is incorrect. Waiting for customer reports could delay detection and increase the impact of a security incident.",
                                              "Publishing the advisory to all external stakeholders before determining whether any company systems are affected is incorrect. External communications should be coordinated and based on verified information rather than issued immediately without assessment."
                                          ],
                          "related":  [
                                          "12.1.5 Identification and Detection"
                                      ],
                          "support":  "q_identification_and_detection_04"
                      },
                      {
                          "n":  55,
                          "type":  "single",
                          "stem":  [
                                       "An analyst wants to understand why poisoning is considered a form of model manipulation. Which explanation is MOST accurate?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Poisoning occurs when an AI system generates information that sounds convincing but is factually incorrect."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Poisoning allows attackers to steal active AI user sessions and reuse valid authentication tokens."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Poisoning introduces malicious or inaccurate data into training datasets, affecting model accuracy and trustworthiness."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Poisoning enables administrators to improve AI transparency by documenting how training data influences future predictions and recommendations."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "That poisoning introduces malicious or inaccurate data into training datasets, affecting model accuracy and trustworthiness is the correct answer. Poisoning manipulates the data used to train a model, which can cause inaccurate or unreliable outputs.",
                                              "That poisoning allows attackers to steal active AI user sessions and reuse valid authentication tokens is incorrect. This describes session hijacking, not poisoning. The focus is on authenticated sessions rather than training data.",
                                              "That poisoning occurs when an AI system generates information that sounds convincing but is factually incorrect is incorrect. This describes a hallucination. Hallucinations are unreliable outputs, while poisoning involves manipulation of training data.",
                                              "That poisoning enables administrators to improve AI transparency by documenting how training data influences future predictions and recommendations is incorrect. This relates more closely to explainability and governance practices. It does not describe a model manipulation attack."
                                          ],
                          "related":  [
                                          "8.5.4 AI Threats and Vulnerabilities"
                                      ],
                          "support":  "q_ai_threats_and_vulnerabilities_04"
                      },
                      {
                          "n":  56,
                          "type":  "single",
                          "stem":  [
                                       "Which of the following cloud computing solutions delivers software applications to a client either over the internet or on a local area network?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "PaaS"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "SaaS"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "IaaS"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "DaaS"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "SaaS is the correct answer. Software as a service (SaaS) delivers software applications to the client either over the internet or on a local area network (LAN).",
                                              "IaaS is incorrect. Infrastructure as a service (IaaS) delivers infrastructure to the client, such as processing, storage, networks, and virtualized environments. The client deploys and runs software without purchasing servers, data center space, or network equipment.",
                                              "PaaS is incorrect. Platform as a service (PaaS) delivers everything a developer needs to build an application on the cloud infrastructure. The deployment comes without the cost and complexity of buying and managing the underlying hardware and software layers.",
                                              "DaaS is incorrect. Data as a service (DaaS) stores and provides data from a centralized location without the need for local collection and storage."
                                          ],
                          "related":  [
                                          "6.1.1 Cloud Deployment Models",
                                          "6.1.3 Cloud Service Models"
                                      ],
                          "support":  "q_cloud_service_models_04"
                      },
                      {
                          "n":  57,
                          "type":  "single",
                          "stem":  [
                                       "What component of modern access controls determines what rights a user should have on each resource?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Identification"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Authorization"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Authentication"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Accounting"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Authorization is the correct answer. Authorization refers to determining what rights users should have on each resource and enforcing those rights. Authorization may involve permissions, individually, group, or role-based.",
                                              "Authentication is incorrect. Authentication refers to proving that users are who or what they claim to be when attempting to access the resource. An authentication factor determines what sort of credential users can use.",
                                              "Identification is incorrect. Identification refers to creating an account or ID that uniquely represents the user, device, or process on the network.",
                                              "Accounting is incorrect. Accounting refers to tracking the authorized usage of a resource or use of rights by a subject and alerting when detecting unauthorized usage."
                                          ],
                          "related":  [
                                          "1.1.5 Access Control Fundamentals",
                                          "4.2.2 Active Directory Facts",
                                          "4.2.3 Active Directory Components"
                                      ],
                          "support":  "q_access_control_fundamentals_02"
                      },
                      {
                          "n":  58,
                          "type":  "single",
                          "stem":  [
                                       "As a cybersecurity analyst, you are tasked with identifying a critical component of a Security Information and Event Management (SIEM) system that can analyze and compare known malicious behavior against aggregated data from log files, system applications, and network appliances. Which component of the SIEM system would be MOST effective for this task?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "SIEM Dashboards"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Correlation"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Alerts"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Trends"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Correlation is the correct answer. Event correlation is a critical SIEM component. The software gathers data from log files, system applications, and network appliances and analyzes it. This work is tedious; people are inefficient at it. That\u0027s why the event correlation feature is valuable. Not only does it gather the data, but it analyzes and compares known malicious behavior against the aggregated data, increasing the chances of the discovery of security events.",
                                              "SIEM Dashboards is incorrect. While SIEM dashboards provide a visual representation of real-time security and network information, they do not analyze and compare known malicious behavior against aggregated data. They merely display the information gathered by other components of the SIEM system.",
                                              "Alerts is incorrect. Alerts are the SIEM\u0027s way of informing the IT team that a pre-established parameter is not within the acceptable range. However, alerts themselves do not analyze and compare known malicious behavior against aggregated data. They are used to notify the team of potential issues.",
                                              "Trends is incorrect. Trends are patterns of activity discovered and reported to the SIEM. They help security analysts decide whether reported activity is normal or outside the baseline. However, trends themselves do not analyze and compare known malicious behavior against aggregated data. They are used to analyze the data collected by other components of the SIEM system."
                                          ],
                          "related":  [
                                          "12.4.3 Alerting and Monitoring Activities"
                                      ],
                          "support":  "q_alerting_and_monitoring_activities_03"
                      },
                      {
                          "n":  59,
                          "type":  "single",
                          "stem":  [
                                       "A manufacturing organization identifies its server maintenance and repair process as a mission-essential function. The company experienced three server failures in the last year, each failure taking approximately six hours to repair and restore operations. A standard operational year is usually assumed to be 8,760 hours (24*365). Given the company\u0027s performance metrics and assuming operations run all day and every day, what are the annual MTBF and MTTR for the organization\u0027s server maintenance and repair process?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "MTBF: 2,000 hours/failure, MTTR: 6 hours"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "MTBF: 1,000 hours/failure, MTTR: 2 hours"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "MTBF: 2,920 hours/failure, MTTR: 6 hours"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "MTBF: 1,460 hours/failure, MTTR: 18 hours"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "MTBF: 2,920 hours/failure, MTTR: 6 hours is the correct answer. The MTTR is 6 hours, which is the time it took to repair and restore operations for each failure. The MTBF is 2,920 hours/failure, calculated by dividing the total operational time of 8,760 hours per year by 3 failures.",
                                              "MTBF: 2,000 hours/failure, MTTR: 6 hours is incorrect. While the MTTR is correct (average time to repair a failure which is 6 hours), the MTBF is incorrect. MTBF is the total operational time divided by the number of failures.",
                                              "MTBF: 1,000 hours/failure, MTTR: 2 hours is incorrect. Both MTTR (2) and MTBF (1,000) are incorrect. MTTR is the average time to repair a failure which is 6 hours, not 2.",
                                              "MTBF: 1,460 hours/failure, MTTR: 18 hours is incorrect. The MTTR is incorrect as it took 6 hours to repair and restore operations for each failure, not 18 hours. The MTBF is also incorrect. The correct MTBF should be 2,920 hours/failure, calculated by dividing the total operational time of 8,760 hours per year by 3 failures."
                                          ],
                          "related":  [
                                          "7.3.1 Continuity of Operations",
                                          "15.1.6 Business Impact Analysis"
                                      ],
                          "support":  "q_business_impact_analysis_01"
                      },
                      {
                          "n":  60,
                          "type":  "single",
                          "stem":  [
                                       "An analyst reports a $90,000 single loss expectancy for a $300,000 asset with a 30% exposure factor. A reviewer doubles the annualized event rate and claims that single loss expectancy must now be $180,000. Which correction preserves the distinction between event loss and annual loss?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Replace single loss expectancy with event rate"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Raise the asset value to $600,000"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Keep single loss expectancy at $90,000"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Raise the exposure factor to 60%"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Keep single loss expectancy at $90,000 keeps the asset value times exposure factor unchanged; the higher event rate changes annualized loss rather than loss per occurrence.",
                                              "Raise the exposure factor to 60% would change the fraction lost in each event even though only frequency was revised.",
                                              "Raise the asset value to $600,000 would change the asset valuation without evidence of a value increase.",
                                              "Replace single loss expectancy with event rate substitutes a frequency measure for the monetary consequence of one event."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_risk_identification_and_assessment_37"
                      },
                      {
                          "n":  61,
                          "type":  "single",
                          "stem":  [
                                       "Which type of attack is the act of exploiting a software program\u0027s free acceptance of input in order to execute arbitrary code on a target?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Data diddling"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Covert channel exploitation"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Buffer overflow attack"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "TOCTOU"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Buffer overflow attack is the correct answer. The act of exploiting a software program\u0027s free acceptance of input in order to execute arbitrary code on a target is called a buffer overflow.",
                                              "Data diddling is incorrect. Data diddling is the change or corruption of data.",
                                              "TOCTOU is incorrect. TOC/TOU is a logon session replay attack.",
                                              "Covert channel exploitation is incorrect. Covert channel exploitation is the use of timing or storage mechanisms to bypass security controls in order to leak information out of a secured environment."
                                          ],
                          "related":  [
                                          "8.2.2 Application Vulnerabilities",
                                          "13.3.1 Application Attacks"
                                      ],
                          "support":  "q_application_vulnerabilities_09"
                      },
                      {
                          "n":  62,
                          "type":  "single",
                          "stem":  [
                                       "At a medium-scale software development firm, significant modifications to several critical applications employees use daily are on the horizon. Considering the principles of change management, what should the primary focus be during the implementation phase of these changes?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Scheduling service restarts during non-business hours to minimize application downtime"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Updating the block list to encompass previous versions of the applications"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Ensuring high-risk alterations are prioritized and subject to the entire change management process"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Concentrating solely on the allow list while disregarding the block list for a smoother transition"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Scheduling service restarts during non-business hours to minimize application downtime is the correct answer. One of the main objectives of change management is to minimize disruptions to business operations. The company can achieve this by scheduling service restarts during off-peak hours or maintenance windows.",
                                              "Ensuring high-risk alterations are prioritized and subject to the entire change management process is incorrect. While high-risk alterations should indeed be subject to the entire change management process, this should not be the primary focus during the implementation phase of the changes.",
                                              "Updating the block list to encompass previous versions of the applications is incorrect. While including previous versions of applications in the block list could be a part of change management, it should not be the primary focus while implementing the changes.",
                                              "Concentrating solely on the allow list while disregarding the block list for a smoother transition is incorrect. Solely concentrating on the allow list while disregarding the block list would not be advisable. Both lists play crucial roles in the change management process and implementation."
                                          ],
                          "related":  [
                                          "14.2.4 Restarts, Dependencies, and Downtime"
                                      ],
                          "support":  "q_restarts_dependencies_and_downtime_02"
                      },
                      {
                          "n":  63,
                          "type":  "single",
                          "stem":  [
                                       "A tester checks a running records application using an administrator account, which can retrieve every customer\u0027s records. The release requirement allows ordinary customers to retrieve only their own records. Which additional dynamic test directly evaluates that authorization requirement?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Review the application source while leaving it stopped"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Request another customer\u0027s records using an ordinary account"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Compare the installed library versions with package advisories"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Repeat every record request with the administrator account"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Repeat every record request with the administrator account. This remains within a role authorized to view all records and leaves the ordinary customer\u0027s access boundary untested.",
                                              "Compare the installed library versions with package advisories. This evaluates dependency vulnerabilities rather than the running application\u0027s customer-level authorization behavior.",
                                              "Request another customer\u0027s records using an ordinary account. This tests the running application across the specified access boundary; denial of the unauthorized request is the expected result.",
                                              "Review the application source while leaving it stopped. This performs static analysis, which can complement testing but does not directly exercise the required runtime access decision."
                                          ],
                          "related":  [
                                          "8.3.1 Vulnerability Scanning"
                                      ],
                          "support":  "q_vulnerability_scanning_08"
                      },
                      {
                          "n":  64,
                          "type":  "multi",
                          "stem":  [
                                       "In a cybersecurity operation where downtime is critical to its mission, a cybersecurity analyst incorporates allow lists and deny lists restrictions. The objective is to guarantee high availability (HA) and safeguard against potential security threats.",
                                       "How would a cybersecurity analyst utilize these lists in this scenario? (Select two.)"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Deny lists can block unauthorized software, hardware, and change types that pose a high risk to the operation\u0027s availability and security."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Enforce robust authentication by mandating further verification for devices and users on the allow list."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Allow lists automatically approve all software updates released by trusted vendors without requiring prior review."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Allow lists can specify approved software, hardware, and change types that are essential for the operation\u0027s functioning."
                                          },
                                          {
                                              "k":  "E",
                                              "t":  "Deny lists can restrict changes that require rigorous testing and approval to prevent any potential disruptions to the operation."
                                          }
                                      ],
                          "answer":  [
                                         "A",
                                         "D"
                                     ],
                          "pick":  2,
                          "explanation":  [
                                              "That allow lists can specify approved software, hardware, and change types that are essential for the operation\u0027s functioning is a correct answer. Allow lists are great for managing change in an organization by allowing only approved software, hardware, and specific types of changes.",
                                              "That deny lists can block unauthorized software, hardware, and change types that pose a high risk to the operation\u0027s availability and security is a correct answer. Changes that pose a high risk to the availability and security of the organization should be included on the deny list to explicitly block software, hardware, and specific change types.",
                                              "Enforcing robust authentication by mandating further verification for devices and users on the allow list is incorrect. Robust authentication indeed strengthens security; however, it extends beyond the scope of allow lists, which primarily govern access permissions. Authentication measures serve to confirm identity once access is granted, not to manage the allowlist entries.",
                                              "That deny lists can restrict changes that require rigorous testing and approval to prevent any potential disruptions to the operation is incorrect. Deny lists primarily focus on blocking known malicious IP addresses or domains rather than restricting changes that require rigorous testing and approval. The emphasis is on addressing security concerns rather than the approval process.",
                                              "That allow lists automatically approve all software updates released by trusted vendors without requiring prior review is incorrect. Allow lists contain explicitly approved software, hardware, and change types; they do not automatically approve new updates. Each update typically requires evaluation and approval before being added to the allow list."
                                          ],
                          "related":  [
                                          "14.2.3 Allowed and Denied Changes"
                                      ],
                          "support":  "q_allowed_and_denied_changes_01"
                      },
                      {
                          "n":  65,
                          "type":  "single",
                          "stem":  [
                                       "A security team\u0027s automated incident response process has accumulated redundant approval steps, repeated data lookups, and unnecessary handoffs between analysts. These issues delay containment and occasionally cause tasks to be performed out of order. Which action best applies process engineering to improve the workflow?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Replace all analyst decisions with automated responses so every alert follows the same containment process regardless of context."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Integrate additional security tools into the workflow before determining whether the existing tasks and decision points support the intended outcome."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Analyze the existing process, remove redundant steps, and redesign the task sequence around the required security outcome."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Add more automated actions to the existing process without changing its approval steps, handoffs, or execution sequence."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Analyzing the existing process, removing redundant steps, and redesigning the task sequence around the required security outcome is the correct answer. Process engineering examines and redesigns workflows so they are efficient, repeatable, and aligned with operational objectives. Removing unnecessary steps and correcting the sequence addresses the identified process problems.",
                                              "Adding more automated actions to the existing process without changing its approval steps, handoffs, or execution sequence is incorrect. Adding automation to an inefficient process can preserve or amplify its existing problems. The underlying steps and dependencies must be evaluated before further automation is introduced.",
                                              "Replacing all analyst decisions with automated responses so every alert follows the same containment process regardless of context is incorrect. Eliminating every analyst decision ignores situations requiring context or human judgment. Effective process engineering determines where automation is appropriate rather than applying it indiscriminately.",
                                              "Integrating additional security tools into the workflow before determining whether the existing tasks and decision points support the intended outcome is incorrect. Additional integrations increase complexity without correcting redundant steps or improper sequencing. The process should be analyzed and optimized before more systems are connected."
                                          ],
                          "related":  [
                                          "14.3.4 Automation and Orchestration Implementation"
                                      ],
                          "support":  "q_automation_and_orchestration_implementation_05"
                      },
                      {
                          "n":  66,
                          "type":  "single",
                          "stem":  [
                                       "A large software development company is implementing a data protection strategy. The company heavily relies on virtual machines for their development and testing environments. The primary concern is the ability to quickly recover and resume work in the event of a primary VM failure or corruption. Which data protection method would be MOST suitable for this organization?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Database mirroring"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "SAN replication"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "VM replication"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "File system journaling"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "VM replication is the correct answer. VM replication creates and maintains an up-to-date copy of a virtual machine on a separate host or location, ensuring that a secondary VM can quickly take over the workload in the event of a primary VM failure or corruption. This makes it the most suitable option for the organization\u0027s primary concern.",
                                              "File system journaling is incorrect. File system journaling records all changes made to files, allowing for data recovery and consistency checks after unexpected system shutdowns or crashes. While it is useful for tracking and monitoring data modifications, it may not provide the quick recovery of a virtual machine environment that the company needs.",
                                              "Database mirroring is incorrect. Database mirroring involves maintaining primary and secondary mirrored databases. Any changes made to the primary database are automatically replicated to the secondary database. While it ensures data consistency and availability if the primary database encounters any issues, it may not provide the quick recovery of a virtual machine environment that the company needs.",
                                              "SAN replication is incorrect. SAN replication duplicates data from one SAN to another in or near real-time, providing redundancy and protection against hardware failures, human errors, or data corruption. While it is beneficial for large datasets and applications, it may not provide the quick recovery of a virtual machine environment that the company needs."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_advanced_data_protection_12"
                      },
                      {
                          "n":  67,
                          "type":  "match",
                          "stem":  [
                                       "Match each general attack strategy with an action or objective associated with it. (Each strategy may be used once, more than once, or not at all.)"
                                   ],
                          "pool":  [
                                       "Reconnaissance",
                                       "Breaching",
                                       "Escalating privileges",
                                       "Staging",
                                       "Exploitation"
                                   ],
                          "items":  [
                                        {
                                            "prompt":  "Gathering system hardware information.",
                                            "answer":  "Reconnaissance"
                                        },
                                        {
                                            "prompt":  "Penetrating system defenses to gain unauthorized access.",
                                            "answer":  "Breaching"
                                        },
                                        {
                                            "prompt":  "Configuring additional rights to do more than breach the system.",
                                            "answer":  "Escalating privileges"
                                        },
                                        {
                                            "prompt":  "Preparing a computer to perform additional tasks in the attack.",
                                            "answer":  "Staging"
                                        },
                                        {
                                            "prompt":  "Crashing systems.",
                                            "answer":  "Exploitation"
                                        }
                                    ],
                          "explanation":  [
                                              "General attack strategies include the following steps:",
                                              "- Reconnaissance is the process of gathering information about an organization, including system hardware information, network configuration, and individual user information.",
                                              "- A breach is the penetration of system defenses. Breaches are achieved using the information gathered during reconnaissance.",
                                              "- An escalating privileges attack is one of the primary objectives of an attacker, which can be achieved by configuring additional (escalated) rights to do more than breach the system.",
                                              "- Staging is preparing a computer to perform additional tasks in the attack, such as installing software designed to attack other systems.",
                                              "- An Exploit is used to take advantage of known vulnerabilities in software and systems. Types of exploitation include stealing information, denying services, crashing systems, and modifying information."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_attack_and_defense_strategy_overview_06"
                      },
                      {
                          "n":  68,
                          "type":  "multi",
                          "stem":  [
                                       "Which of the following are examples of something you have authentication controls? (Select two.)"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Cognitive question"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Smart card"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Handwriting analysis"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Voice recognition"
                                          },
                                          {
                                              "k":  "E",
                                              "t":  "PIN"
                                          },
                                          {
                                              "k":  "F",
                                              "t":  "Photo ID"
                                          }
                                      ],
                          "answer":  [
                                         "B",
                                         "F"
                                     ],
                          "pick":  2,
                          "explanation":  [
                                              "Photo ID is a correct answer. A photo ID is a physical item in the user\u0027s possession, making it an example of a something you have authentication factor.",
                                              "Smart card is a correct answer. A smart card is a physical authentication device that the user possesses, which qualifies it as something you have.",
                                              "PIN is incorrect. A PIN is classified as something you know because it is information that must be remembered and entered by the user.",
                                              "Cognitive question is incorrect. A cognitive question relies on knowledge-based information, such as a personal fact or secret answer that the user knows.",
                                              "Voice recognition is incorrect. Voice recognition is a biometric authentication method that verifies something you are rather than something you have.",
                                              "Handwriting analysis is incorrect. Handwriting analysis is a biometric factor based on behavioral characteristics, so it is considered something you are."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_multifactor_authentication_06"
                      },
                      {
                          "n":  69,
                          "type":  "single",
                          "stem":  [
                                       "A company hosts several web applications in a screened subnet (DMZ). The security team wants administrators to remotely manage these servers while minimizing the risk of attackers gaining direct access to administrative interfaces. The team also wants all administrative access to be tightly controlled and easily audited. Which solution BEST meets these requirements?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Expose the administrative interfaces of the application servers to the Internet and protect them with strong passwords only."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Deploy a jump server and require administrators to connect through it before accessing application servers."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Allow each administrator\u0027s workstation to connect directly to every application server\u0027s administrative interface."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Configure all application servers to accept management connections from any internal host to simplify administration and reduce access delays."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Deploying a jump server and requiring administrators to connect through it before accessing application servers is the correct answer. A jump server provides a controlled administrative access point and allows access to be centralized, monitored, and restricted.",
                                              "Allowing each administrator\u0027s workstation to connect directly to every application server\u0027s administrative interface is incorrect. Direct administrator access to each server increases the number of allowed management paths and makes access control more difficult to manage.",
                                              "Exposing the administrative interfaces of the application servers to the Internet and protecting them with strong passwords only is incorrect. Internet-facing administrative interfaces increase exposure and create additional opportunities for unauthorized access attempts.",
                                              "Configuring all application servers to accept management connections from any internal host to simplify administration and reduce access delays is incorrect. Allowing management connections from any internal host expands the attack surface and weakens access control over administrative functions."
                                          ],
                          "related":  [
                                          "5.3.12 Out-of-Band Management and Jump Servers"
                                      ],
                          "support":  "q_out-of-band_management_and_jump_servers_02"
                      },
                      {
                          "n":  70,
                          "type":  "single",
                          "stem":  [
                                       "A software company operates an online collaboration platform built using a microservices architecture. During peak usage hours, the document-sharing component experiences significantly higher demand than the messaging and notification components. The engineering team wants to improve performance while minimizing infrastructure costs. Which action BEST aligns with the principles of a microservices architecture?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Scale every service in the application equally, regardless of workload demand."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Migrate all application functions into a single monolithic application running on one server."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Redeploy the entire application stack whenever additional capacity is needed for any individual service."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Scale only the document-sharing microservice independently of the other services."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Scaling only the document-sharing microservice independently of the other services is the correct answer. Microservices are designed as independent components that can be scaled separately based on their specific workload requirements. This improves efficiency and resource utilization.",
                                              "Scaling every service in the application equally, regardless of workload demand, is incorrect. Scaling all services equally can waste resources when demand is concentrated in only one component.",
                                              "Migrating all application functions into a single monolithic application running on one server is incorrect. A monolithic design reduces the flexibility and independence that microservices provide.",
                                              "Redeploying the entire application stack whenever additional capacity is needed for any individual service is incorrect. Requiring the entire application to be redeployed for a single service change reduces agility and increases operational overhead."
                                          ],
                          "related":  [
                                          "6.1.10 Cloud Architecture",
                                          "6.1.13 Cloud Architecture Considerations"
                                      ],
                          "support":  "q_cloud_architecture_02"
                      },
                      {
                          "n":  71,
                          "type":  "single",
                          "stem":  [
                                       "In the context of data protection and recovery, which of the following statements about replication is correct?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Replication involves creating and maintaining different versions of data on the same storage system."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Replication is a data compression technique that optimizes storage space by identifying and eliminating redundant data."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Replication can increase the risk of data loss due to hardware failures, human errors, or malicious attacks."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Replication involves creating and maintaining exact copies of data on different storage systems or locations."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "That replication involves creating and maintaining exact copies of data on different storage systems or locations is the correct answer. Replication involves creating and maintaining exact copies of data on different storage systems or locations. Replication is a data protection method that involves creating and maintaining exact copies of data on different storage systems or locations.",
                                              "That replication is a data compression technique that optimizes storage space by identifying and eliminating redundant data is incorrect. Replication is a data compression technique that optimizes storage space by identifying and eliminating redundant data is incorrect. The process described here is data deduplication, not replication. Replication involves creating and maintaining exact copies of data, not eliminating redundant data.",
                                              "That replication involves creating and maintaining different versions of data on the same storage system is incorrect. Replication involves creating and maintaining different versions of data on the same storage system is incorrect. Replication involves creating and maintaining exact copies of data on different storage systems or locations, not different versions of data on the same storage system.",
                                              "That replication can increase the risk of data loss due to hardware failures, human errors, or malicious attacks is incorrect. Replication can increase the risk of data loss due to hardware failures, human errors, or malicious attacks is incorrect. By having redundant copies of the data, replication can actually safeguard against data loss due to various factors including hardware failures, human errors, or malicious attacks."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_advanced_data_protection_10"
                      },
                      {
                          "n":  72,
                          "type":  "single",
                          "stem":  [
                                       "A company\u0027s IT department considers different approaches to obtaining digital certificates for its internal network infrastructure. The IT department evaluated the use of a Certificate Signing Request (CSR) and third-party Certificate Authorities (CAs) to meet their security requirements. What is the primary advantage of using a CSR and a third-party CA for obtaining digital certificates compared to other methods?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Digital certificates obtained through a Certificate Signing Request and a third-party Certificate Authority provide stronger encryption algorithms and key lengths."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Using a Certificate Signing Request and a third-party Certificate Authority eliminates the need for regular certificate renewals and maintenance."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Using a Certificate Signing Request and a third-party Certificate Authority allows for faster deployment of digital certificates within the network."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Digital certificates obtained through a Certificate Signing Request and a third-party Certificate Authority have a higher level of trust and recognition within the industry."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Digital certificates obtained through a Certificate Signing Request and a third-party Certificate Authority having a higher level of trust and recognition within the industry is the correct answer. Obtaining digital certificates through a Certificate Signing Request and a third-party Certificate Authority offers robust validation, wider recognition, and adherence to industry standards and best practices, leading to a higher level of trust within the industry and among users.",
                                              "Using a Certificate Signing Request and a third-party Certificate Authority allowing for faster deployment of digital certificates within the network is incorrect. A CSR and third-party CA may allow for faster deployment of digital certificates within the network, but do not address the level of trust and recognition.",
                                              "Digital certificates obtained through a Certificate Signing Request and a third-party Certificate Authority providing stronger encryption algorithms and key lengths is incorrect. Digital certificates obtained through a CSR and a third-party CA provide stronger encryption algorithms, including key lengths, but it does not specifically relate to the trust and recognition aspect.",
                                              "Using a Certificate Signing Request and a third-party Certificate Authority eliminating the need for regular certificate renewals and maintenance, is incorrect. Digital certificates obtained through a CSR and a third-party CA still require regular renewals and maintenance, regardless of the method to obtain them."
                                          ],
                          "related":  [
                                          "3.3.5 Certificate Signing Requests"
                                      ],
                          "support":  "q_certificate_signing_requests_04"
                      },
                      {
                          "n":  73,
                          "type":  "single",
                          "stem":  [
                                       "The IT department is congratulating itself after finally removing all traces of a malicious actor on the network and is heading out for the day. The same malicious actor appears to be back in the network the following morning and has a stronger foothold. What did the IT department need to remember to do?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Patching"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Segmentation"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Reporting"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Validation"
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Validation is the correct answer. Validation is the most crucial step in removing a malicious actor or software from the network. It ensures no introduction of new vulnerabilities into the system and complete restoration of network security.",
                                              "Segmentation is incorrect. Segmentation assists in restricting a malicious actor from making progress across the network; it does not ensure the removal of a malicious actor\u0027s presence.",
                                              "Reporting is incorrect. Reporting on the compromised vulnerability will assist others in avoiding the same vulnerability exploitation on their networks and systems. It does not ensure the removal of a malicious actor\u0027s presence.",
                                              "Patching is incorrect. Patching is essential, but without validation, there is no assurance that the patch did not introduce new vulnerabilities or the malicious actor\u0027s removal from the network."
                                          ],
                          "related":  [
                                          "8.4.5 Vulnerability Response and Remediation"
                                      ],
                          "support":  "q_vulnerability_response_and_remediation_05"
                      },
                      {
                          "n":  74,
                          "type":  "multi",
                          "stem":  [
                                       "An employee is leaving the organization. Which three security areas should the offboarding checklist address to revoke access and recover organizational property? (Select three.)"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Account management"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Acceptable use"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Asset allocation"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Clean desk"
                                          },
                                          {
                                              "k":  "E",
                                              "t":  "Company assets"
                                          },
                                          {
                                              "k":  "F",
                                              "t":  "Personal assets"
                                          },
                                          {
                                              "k":  "G",
                                              "t":  "Physical security"
                                          }
                                      ],
                          "answer":  [
                                         "A",
                                         "E",
                                         "G"
                                     ],
                          "pick":  3,
                          "explanation":  [
                                              "The following are focus areas during the offboarding process and the correct answers:",
                                              "- Account management. When a user leaves, the HR division immediately deactivates the account, marking it for auto-deletion later.",
                                              "- Physical security. While not always related to IT security, physical security and the items that support physical security are important to keep track of.",
                                              "- Company assets. An organization must account for any electronic devices employees use during employment, returning them before their departure. An inventory sheet allows for the accounting of all of the property previously in their control.",
                                              "The following are not the direct focus of an offboarding process and incorrect answers:",
                                              "- Personal assets. Any personal devices (assets) used for company activities must have the proprietary information removed, including the removal of any software purchased by the company.",
                                              "- Clean desk. A clean desk means that each employee\u0027s work area should be free from any documents left there, which is not a primary focus of offboarding.",
                                              "- Acceptable use. An acceptable use policy (AUP) is important to protect the organization from the security and legal implications of employees misusing its equipment. However, it is not a primary focus of offboarding.",
                                              "- Asset allocation. Asset allocation provisions computers or mobile devices for the user, including the use of bring-your-own-device handsets. This is an onboarding issue, not an offboarding issue."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_procedures_04"
                      },
                      {
                          "n":  75,
                          "type":  "single",
                          "stem":  [
                                       "An organization allows employees to use a public AI assistant for work-related tasks. Why can entering customer records or proprietary business information into the AI tool create a data loss risk?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "The AI tool guarantees that all submitted business information remains permanently unavailable to other systems and future processing activities."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "The information could be stored, exposed, or used beyond its intended purpose."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "The AI tool will automatically delete all sensitive information after processing it."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Sensitive information becomes encrypted by default whenever it is entered into an AI tool."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "That the information could be stored, exposed, or used beyond its intended purpose is the correct answer. Sensitive data entered into AI systems may be retained or exposed in ways that create confidentiality and privacy concerns.",
                                              "That the AI tool will automatically delete all sensitive information after processing it is incorrect. AI tools do not necessarily remove submitted information after use. Sensitive data may still be stored or processed.",
                                              "That sensitive information becomes encrypted by default whenever it is entered into an AI tool is incorrect. Entering information into an AI tool does not automatically guarantee protection through encryption.",
                                              "That the AI tool guarantees that all submitted business information remains permanently unavailable to other systems and future processing activities is incorrect. No such guarantee can be assumed, which is why sensitive information should be carefully controlled."
                                          ],
                          "related":  [
                                          "8.5.7 AI Data, Privacy, and Operational Risks"
                                      ],
                          "support":  "q_ai_data_privacy_and_operational_risks_04"
                      },
                      {
                          "n":  76,
                          "type":  "single",
                          "stem":  [
                                       "A company is reassigning a server with a magnetic HDD. Its policy requires whole-drive overwriting before reuse. The technician overwrites the user partition but leaves the drive\u0027s other partitions untouched. Which completion decision follows the policy?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Complete a quick format of the user partition"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Release the server after reinstalling its operating system"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Complete overwriting across the remaining drive areas"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Release the server after deleting its user accounts"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Release the server after deleting its user accounts. This changes access records but leaves the unprocessed drive areas outside the required sanitization.",
                                              "Complete overwriting across the remaining drive areas. This brings the entire magnetic drive within the stated whole-drive sanitization requirement before reuse.",
                                              "Release the server after reinstalling its operating system. This may replace some data but does not establish that the remaining drive areas were overwritten.",
                                              "Complete a quick format of the user partition. This removes filesystem references within the partition already processed rather than covering the untouched areas."
                                          ],
                          "related":  [
                                          "7.1.3 Asset Tracking",
                                          "7.1.12 Secure Data Destruction"
                                      ],
                          "support":  "q_asset_tracking_13"
                      },
                      {
                          "n":  77,
                          "type":  "single",
                          "stem":  [
                                       "The IT team at a medium-sized company is upgrading its wireless network security to protect sensitive data and ensure secure communication between devices. They have decided to implement a Wi-Fi Protected Access 3 (WPA3). What is the primary purpose of implementing WPA3 on the company\u0027s wireless network?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "To provide additional administrative features for network management"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "To increase the wireless network\u0027s speed and performance"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "To enhance wireless network security with the latest encryption standards"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "To ensure seamless compatibility with legacy wireless devices"
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "To enhance wireless network security with the latest encryption standards is the correct answer. Implementing Wi-Fi Protected Access 3 (WPA3) on the company\u0027s wireless network is to enhance security by utilizing the latest encryption standards. WPA3 provides strong encryption mechanisms, making it more resistant to various security threats and attacks.",
                                              "To increase the wireless network\u0027s speed and performance is incorrect. While WPA3 enhances security, it does not directly impact the speed or performance of the wireless network. Its primary focus is on providing robust encryption to safeguard data.",
                                              "To ensure seamless compatibility with legacy wireless devices is incorrect. While WPA3 is backward compatible with WPA2, its primary purpose is not to ensure compatibility with legacy wireless devices. Instead, it focuses on strengthening security through advanced encryption methods.",
                                              "To provide additional administrative features for network management is incorrect. WPA3 enhances security, not additional administrative features. Its main function is to protect data using robust cryptographic protocols."
                                          ],
                          "related":  [
                                          "9.1.4 Wireless Encryption",
                                          "14.1.4 Standards"
                                      ],
                          "support":  "q_wireless_encryption_11"
                      },
                      {
                          "n":  78,
                          "type":  "single",
                          "stem":  [
                                       "A financial services company plans to migrate several customer-facing applications to a new infrastructure platform. During the change review process, the implementation team confirms that testing was successful and a maintenance window has been scheduled. However, the security manager is concerned that the migration could affect integrated billing systems, customer authentication services, and multiple business departments. Which action should the change management team prioritize before approving the migration?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Focus on finalizing a backout plan and defer any assessment of downstream effects until after implementation."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Perform an impact analysis to evaluate how the proposed change could affect interconnected systems, users, and business processes."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Schedule additional maintenance windows and require all affected departments to be available during the migration without first evaluating potential operational impacts."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Proceed with the migration because successful testing indicates that all potential business impacts have already been addressed."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Performing an impact analysis to evaluate how the proposed change could affect interconnected systems, users, and business processes is the correct answer. Impact analysis identifies and assesses the potential implications of a proposed change before it is implemented. It helps determine how the change may affect systems, users, and business operations.",
                                              "Proceeding with the migration because successful testing indicates that all potential business impacts have already been addressed is incorrect. Testing validates functionality but does not necessarily identify every operational or business impact. Additional analysis may still be required.",
                                              "Focusing on finalizing a backout plan and deferring any assessment of downstream effects until after implementation is incorrect. A backout plan prepares for failure recovery but does not evaluate the consequences of a proposed change. Potential impacts should be understood before deployment.",
                                              "Scheduling additional maintenance windows and requiring all affected departments to be available during the migration without first evaluating potential operational impacts is incorrect. Maintenance windows help manage change timing, but they do not identify how the change may affect dependent systems or business processes. An analysis of potential impacts should occur first."
                                          ],
                          "related":  [
                                          "14.2.2 Change Management Programs"
                                      ],
                          "support":  "q_change_management_programs_18"
                      },
                      {
                          "n":  79,
                          "type":  "single",
                          "stem":  [
                                       "A financial services company allows employees to use mobile applications for customer account management. During a security assessment, the company discovers that several employees have granted permanent location access to applications that do not require location information for business purposes. The security team wants to reduce privacy risks while still allowing necessary business applications to function. What should the security team do?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Disable device screen locks so users can quickly respond to location-based notifications."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Configure geolocation services to remain permanently enabled for every application and synchronize location history across all corporate devices."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Enable location access for all applications to ensure consistent functionality across devices."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Review application permissions and restrict location access to only the apps that require it."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Reviewing application permissions and restricting location access to only the apps that require it is the correct answer. Limiting location permissions reduces unnecessary exposure of sensitive location data while allowing legitimate applications to function.",
                                              "Enabling location access for all applications to ensure consistent functionality across devices is incorrect. Granting location access to all applications increases privacy risks and provides access beyond what is necessary.",
                                              "Disabling device screen locks so users can quickly respond to location-based notifications is incorrect. Screen locks protect device access but do not control how applications use location information.",
                                              "Configuring geolocation services to remain permanently enabled for every application and synchronize location history across all corporate devices is incorrect. Collecting and synchronizing unnecessary location data increases privacy exposure rather than reducing it."
                                          ],
                          "related":  [
                                          "10.2.6 Location Services",
                                          "10.2.7 Cellular and GPS Connection Methods"
                                      ],
                          "support":  "q_location_services_02"
                      },
                      {
                          "n":  80,
                          "type":  "single",
                          "stem":  [
                                       "A financial services company uses a predictive analysis system to identify potentially fraudulent transactions and automatically prioritize investigations. Over the past month, analysts notice that several known fraudulent transactions were assigned low-risk scores and were not escalated for review. An investigation reveals that recent training data included inaccurate records from an unverified source. Which action should the security team take to BEST improve the reliability of the predictive analysis system?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Reduce the frequency of model retraining and retain all existing data, including unverified records, to preserve historical patterns and minimize changes to future predictions."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Configure the system to trust all future data sources that provide large amounts of transaction information, even if the sources have not been independently validated."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Increase the number of automated responses generated by the system so that all low-risk transactions receive additional processing before being reviewed."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Validate the integrity and provenance of training data, remove inaccurate records, and retrain the model using trusted datasets."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Validating the integrity and provenance of training data, removing inaccurate records, and retraining the model using trusted datasets is the correct answer. Predictive systems depend on reliable data to generate accurate results. Removing untrusted data and retraining helps restore confidence in future predictions.",
                                              "Increasing the number of automated responses generated by the system so that all low-risk transactions receive additional processing before being reviewed is incorrect. Additional automation does not address the underlying cause of inaccurate risk scores. The primary issue is the quality of the data used by the model.",
                                              "Configuring the system to trust all future data sources that provide large amounts of transaction information, even if the sources have not been independently validated, is incorrect. Automatically trusting unverified sources increases the likelihood of inaccurate or manipulated data influencing predictions. Data sources should be validated before use.",
                                              "Reducing the frequency of model retraining and retaining all existing data, including unverified records, to preserve historical patterns and minimize changes to future predictions is incorrect. Keeping inaccurate data in the training set allows errors to continue affecting outcomes. Regular retraining with trustworthy data helps maintain model effectiveness."
                                          ],
                          "related":  [
                                          "8.5.2 AI in Cybersecurity",
                                          "8.5.10 Securing AI Capabilities"
                                      ],
                          "support":  "q_securing_ai_capabilities_07"
                      },
                      {
                          "n":  81,
                          "type":  "single",
                          "stem":  [
                                       "A sender encrypts a message with a recipient\u0027s authentic public key using a secure asymmetric cipher. A passive observer captures the ciphertext and the published public key; the recipient\u0027s private key remains secret. Which assessment describes confidentiality under these conditions?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Public-key disclosure alone leaves the message confidential"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Public-key substitution requires investigating an active impersonation attack"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Plaintext interception requires treating the message as compromised"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Private-key exposure requires treating the message as compromised"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Private-key exposure requires treating the message as compromised because the private key enables decryption, but that key remains secret in this scenario.",
                                              "Plaintext interception requires treating the message as compromised because it exposes readable content, but this observer captured only ciphertext and the public key.",
                                              "Public-key substitution requires investigating an active impersonation attack when an attacker replaces the recipient\u0027s key, but the scenario specifies an authentic key and a passive observer.",
                                              "\"Public-key disclosure alone leaves the message confidential\" follows because ciphertext encrypted with the authentic public key requires the paired private key for decryption, and that private key remains secret."
                                          ],
                          "related":  [
                                          "3.1.4 Asymmetric Encryption"
                                      ],
                          "support":  "q_asymmetric_encryption_07"
                      },
                      {
                          "n":  82,
                          "type":  "single",
                          "stem":  [
                                       "A tech startup is evaluating the security posture of its network. The startup primarily utilizes routers, servers, and wireless devices as part of its IT infrastructure. What steps can the startup take to enhance the security of these components?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Assign the same administrator credentials across all servers for consistency."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Regularly verify the latest updates but postpone their installation to limit system downtime."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Utilize open wireless networks to ensure accessibility for all devices."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Enable necessary services only and limit device accessibility through secure protocols."
                                          }
                                      ],
                          "answer":  [
                                         "D"
                                     ],
                          "explanation":  [
                                              "Enabling necessary services only and limiting device accessibility through secure protocols is the correct answer. Enabling only necessary services limits potential points of entry for attackers, reducing the system\u0027s attack surface. Using secure protocols for device accessibility can further strengthen security by ensuring secure data transmission.",
                                              "Utilizing open wireless networks to ensure accessibility for all devices is incorrect. Open wireless networks allow any device to connect, increasing the risk of unauthorized access and potential network attacks.",
                                              "Assigning the same administrator credentials across all servers for consistency is incorrect. Using the same administrator credentials across all servers can lead to security issues. When one compromised server occurs, then all servers become at risk. It is better to use unique, strong credentials for each server.",
                                              "Regularly verifying the latest updates but postpone their installation to limit system downtime is incorrect. While keeping track of the latest updates is crucial, postponing their installation can leave systems vulnerable to known security threats. Regular and prompt installation of patches and updates is critical to maintaining system security."
                                          ],
                          "related":  [
                                          "4.4.6 Account Attributes and Access Policies",
                                          "9.1.1 Benchmarks and Secure Configuration Guides"
                                      ],
                          "support":  "q_benchmarks_and_secure_configuration_guides_12"
                      },
                      {
                          "n":  83,
                          "type":  "single",
                          "stem":  [
                                       "A systems administrator is reviewing newly deployed cloud resources. Which of the following BEST explains why default configurations can create security vulnerabilities?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Default settings automatically encrypt all stored and transmitted data."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Default settings improve compatibility but completely eliminate configuration errors."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Default settings may leave systems with overly permissive access or unnecessary services enabled."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Default settings prevent systems from connecting to external networks."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "That default settings may leave systems with overly permissive access or unnecessary services enabled is the correct answer. Default configurations often prioritize ease of deployment rather than security, which can expose systems to unnecessary risk.",
                                              "That default settings prevent systems from connecting to external networks is incorrect. Default settings typically do not block all external network connectivity.",
                                              "That default settings automatically encrypt all stored and transmitted data is incorrect. Encryption is not always enabled automatically in default configurations.",
                                              "That default settings improve compatibility but completely eliminate configuration errors is incorrect. Compatibility may be improved, but default settings do not eliminate security or configuration issues."
                                          ],
                          "related":  [
                                          "8.1.7 Misconfiguration Vulnerabilities"
                                      ],
                          "support":  "q_misconfiguration_vulnerabilities_03"
                      },
                      {
                          "n":  84,
                          "type":  "single",
                          "stem":  [
                                       "One of the company\u0027s accountants submitted a ticket stating they could not access a particular section of the accounting software. Why might the accountant not have access to every part of the accounting software?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Least privilege"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Mandatory access control"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Discretionary access control"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Licensing"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Least privilege is the correct answer. To increase the security posture of any given system, users should only have the necessary access (least privilege) to complete their work and nothing more.",
                                              "Licensing is incorrect. Depending on the software, not having a specific license prevents users from accessing all of a given software. However, the most common reason is least privilege.",
                                              "Discretionary access control is incorrect. The resource owner has primacy in a discretionary access control (DAC) model. Every resource has an owner who creates a file or service, although another user can receive ownership assignment.",
                                              "Mandatory access control is incorrect. Security clearance levels form the basis of mandatory access control (MAC). Rather than defining access control lists (ACLs) on resources, each object receives a classification label. Depending on the clearance level, a subject receives access to that resource."
                                          ],
                          "related":  [
                                          "2.2.10 Attack and Defense Strategy Overview",
                                          "4.4.2 Least Privilege Permission Assignments"
                                      ],
                          "support":  "q_least_privilege_permission_assignments_01"
                      },
                      {
                          "n":  85,
                          "type":  "single",
                          "stem":  [
                                       "In your role as a security analyst, you need to stay up to date on the latest threats. You are currently reviewing the latest real-time updates on cyberthreats from across the world. Which of the following resources are you MOST likely using?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Intelligence fusion"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Threat feeds"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Advisories and bulletins"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Threat hunting"
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Threat feeds is the correct answer. Threat feeds provide real-time updates on cyberthreats across the world. They can provide information such as suspicious domains, known malware, known malicious IP addresses, and more.",
                                              "Advisories and bulletins is incorrect. Advisories and bulletins are usually updated weekly and provide much more detailed information on the newest threats.",
                                              "Intelligence fusion is incorrect. Intelligence fusion is the sharing of information between multiple government agencies and private security firms.",
                                              "Threat hunting is incorrect. Threat hunting is the human-based, proactive and methodical monitoring of a network, systems, and software. This is done in order to detect any suspicious activity that may have evaded the automated tools."
                                          ],
                          "related":  [
                                          "8.3.8 Threat Feeds"
                                      ],
                          "support":  "q_threat_feeds_09"
                      },
                      {
                          "n":  86,
                          "type":  "single",
                          "stem":  [
                                       "What is a key architectural difference between a virtual machine and a container?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Virtual machines can only run a single application, while containers must run multiple applications."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Containers require more hardware resources because each container runs its own guest operating system."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Virtual machines include their own guest operating systems, while containers share the host operating system."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Containers always provide stronger isolation because they include dedicated operating systems and virtual hardware for every application instance."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "That virtual machines include their own guest operating systems, while containers share the host operating system is the correct answer. Virtual machines include a complete guest operating system, while containers use the host operating system and package only the necessary application components.",
                                              "That containers require more hardware resources because each container runs its own guest operating system is incorrect. Containers generally require fewer resources because they do not include separate guest operating systems.",
                                              "That virtual machines can only run a single application, while containers must run multiple applications is incorrect. Neither architecture is limited by the number of applications it can support.",
                                              "That containers always provide stronger isolation because they include dedicated operating systems and virtual hardware for every application instance is incorrect. Dedicated guest operating systems are characteristic of virtual machines, not containers."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_application_virtualization_and_container_virtualization_01"
                      },
                      {
                          "n":  87,
                          "type":  "single",
                          "stem":  [
                                       "A company delivered annual phishing training to all employees.",
                                       "Post-training quizzes show strong knowledge gains, but three months later, phishing simulations indicate increasing click rates and incident reports show that suspicious messages frequently go unreported.",
                                       "Which action BEST applies the security awareness training lifecycle to address these findings?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Repeat the same training immediately because strong quiz results confirm that the existing content is effective."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Begin a new assessment focused only on employees who failed the original post-training quiz."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Return to monitoring and adaptation, revise the program using the behavioral data, and provide ongoing reinforcement."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Continue monitoring until the next annual training cycle so the organization can collect a complete year of results before changing the program."
                                          }
                                      ],
                          "answer":  [
                                         "C"
                                     ],
                          "explanation":  [
                                              "Returning to monitoring and adaptation, revising the program using the behavioral data, and providing ongoing reinforcement is the correct answer. The long-term behavioral results show that the training is not producing sustained improvement. Monitoring and adaptation should use these findings to adjust the program, while ongoing reinforcement helps maintain awareness between formal training sessions.",
                                              "Repeating the same training immediately because strong quiz results confirm that the existing content is effective is incorrect. Repeating unchanged training disregards evidence that employees are not consistently applying their knowledge. High post-training quiz scores measure immediate understanding but do not establish lasting behavioral improvement.",
                                              "Beginning a new assessment focused only on employees who failed the original post-training quiz is incorrect. Limiting reassessment to employees who failed the quiz overlooks the organization-wide decline revealed by simulations and incident reporting. The program must address both knowledge retention and practical behavior.",
                                              "Continuing to monitor until the next annual training cycle so the organization can collect a complete year of results before changing the program is incorrect. Delaying improvements leaves known weaknesses unaddressed even though recurring measurements already demonstrate declining effectiveness. The lifecycle supports adapting training when monitoring identifies changing risks or ineffective outcomes."
                                          ],
                          "related":  [

                                      ],
                          "support":  "q_security_awareness_training_lifecycle_04"
                      },
                      {
                          "n":  88,
                          "type":  "multi",
                          "stem":  [
                                       "Which of the following are main variables in calculating risks? (Select two.)"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Risk mitigation cost"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Likelihood"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Risk assessment"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Probability"
                                          },
                                          {
                                              "k":  "E",
                                              "t":  "Risk response time"
                                          }
                                      ],
                          "answer":  [
                                         "B",
                                         "D"
                                     ],
                          "pick":  2,
                          "explanation":  [
                                              "The following are main variables in calculating risks and the correct answers:",
                                              "- Probability. Probability is a quantitative measure typically expressed as a numerical value between 0 and 1 or a percentage. Probability aims to precisely measure the chance of a risk event occurring based on statistical methods. Therefore, it is a main variable in calculating risks.",
                                              "- Likelihood. Likelihood is often used in qualitative analysis to describe the chance of a risk event happening subjectively. It is typically expressed using \"low,\" \"medium,\" and \"high\" or scored on a scale from 1 to 5. Therefore, it is also a main variable in calculating risks.",
                                              "Risk mitigation cost is incorrect. Risk mitigation cost is a factor considered after risks have been identified and assessed. It is not a variable used in the calculation of risk itself.",
                                              "Risk response time is incorrect. Risk response time is a factor that comes into play after a risk has occurred. It is not a variable used in the calculation of risk itself.",
                                              "Risk assessment is incorrect. Risk assessment is a core component of a cybersecurity program that evaluates previously identified risks to determine their potential impact on the organization. Calculating risks is a part of that component."
                                          ],
                          "related":  [
                                          "15.1.5 Risk Management Processes"
                                      ],
                          "support":  "q_risk_management_processes_04"
                      },
                      {
                          "n":  89,
                          "type":  "single",
                          "stem":  [
                                       "You are a cybersecurity expert at a large corporation. Your company has just decommissioned a data center and you are tasked with ensuring the secure destruction of data on thousands of hard drives. The data includes highly sensitive information. Which of the following solutions would be BEST for destroying the data?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Physically destroy the drives by pulverizing them."
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Use a combination of overwriting and degaussing before disposing of the drives."
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Overwrite the data on the drives and then reuse them within the company."
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Use a third-party service to degauss the drives."
                                          }
                                      ],
                          "answer":  [
                                         "B"
                                     ],
                          "explanation":  [
                                              "Using a combination of overwriting and degaussing before disposing of the drives is the correct answer. This option provides a high level of security by first overwriting the data (making it unreadable) and then degaussing the drives (rendering them unusable). This two-step process reduces the chance of data recovery to near zero. While the drives cannot be reused, the level of data sensitivity and the scale of the task may warrant this approach.",
                                              "Overwriting the data on the drives and then reuse them within the company is incorrect. While overwriting the data can make it unreadable and allows for the medium to be reused, it may not be the most secure method for highly sensitive data. There\u0027s a small chance that some data could potentially be recovered.",
                                              "Using a third-party service to degauss the drives is incorrect. Degaussing changes the magnetic field of the drive, rendering it unusable and the data unrecoverable. This is a secure method of data destruction for highly sensitive data. However, it means the drives cannot be reused, which could be a waste of resources given the large number of drives.",
                                              "Physically destroying the drives by pulverizing them is incorrect. While physically destroying the drives by pulverizing them would ensure the data is unrecoverable, it is not the most environmentally friendly option. It also doesn\u0027t allow for the possibility of reusing or recycling the drives."
                                          ],
                          "related":  [
                                          "7.1.3 Asset Tracking",
                                          "7.1.12 Secure Data Destruction"
                                      ],
                          "support":  "q_asset_tracking_04"
                      },
                      {
                          "n":  90,
                          "type":  "single",
                          "stem":  [
                                       "A group of threat actors disrupts the online services of an oil company due to their disagreement with the company\u0027s environmental policies. They believe their actions can force the company to change its practices. This type of threat actor is primarily driven by what kind of motivation?"
                                   ],
                          "options":  [
                                          {
                                              "k":  "A",
                                              "t":  "Political/philosophical beliefs"
                                          },
                                          {
                                              "k":  "B",
                                              "t":  "Espionage"
                                          },
                                          {
                                              "k":  "C",
                                              "t":  "Service disruption"
                                          },
                                          {
                                              "k":  "D",
                                              "t":  "Financial gain"
                                          }
                                      ],
                          "answer":  [
                                         "A"
                                     ],
                          "explanation":  [
                                              "Political/philosophical beliefs is the correct answer. The group, motivated by their philosophical beliefs about environmental responsibility, use their actions to bring about change in line with these beliefs.",
                                              "Service disruption is incorrect. Service disruption is a method that threat actors can use to achieve their objectives. In this case, service disruption is the action taken, not the motivation behind it.",
                                              "Espionage is incorrect. Espionage refers to the act of obtaining secret or confidential information without the permission of the holder of the information. In this scenario, there is no mention of the group attempting to obtain confidential information.",
                                              "Financial gain is incorrect. The scenario does not suggest that the group\u0027s motivation is financial gain. They are not seeking to profit from their actions but to effect change in the company\u0027s policies."
                                          ],
                          "related":  [
                                          "2.1.3 Motivations of Threat Actors"
                                      ],
                          "support":  "q_motivations_of_threat_actors_04"
                      }
                  ]
};
