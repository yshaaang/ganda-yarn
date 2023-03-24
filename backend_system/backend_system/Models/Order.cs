using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Order
{
    public string Id { get; set; } = null!;

    public string UserId { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string MobileNumber { get; set; } = null!;

    public string HomeAddress { get; set; } = null!;

    public string EmailAddress { get; set; } = null!;

    public string StatusCode { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ICollection<OrderProduct> OrderProducts { get; } = new List<OrderProduct>();

    public virtual Status StatusCodeNavigation { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
